import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { VStack, Image, Center, Text, Heading, ScrollView, useToast, Toast, ToastTitle } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


import { AppError } from "@utils/AppError";

import { api } from "@services/api";
import { useAuth } from "@hooks/useAuth";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ToastMessage } from "@components/ToastMessage";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  email: yup.string().email("E-mail inválido.").required("Informe o e-mail."),
  password: yup.string().required("Informe a senha.").min(6, "Senha deve ter no mínimo 6 caracteres."),
  confirmPassword: yup.string().required("Confirme a senha.").oneOf([yup.ref("password"), ""], "As senhas devem ser iguais."),
})


export function SignUp() {

  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();

  const toast = useToast();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSignUp({ name, email, password }: FormDataProps) {
    try {
      setIsLoading(true);

      await api.post('/users', { name, email, password })

      await signIn(email, password);

    } catch (error) {
      setIsLoading(false);

      const isAppError = error instanceof AppError;
      
      const title = isAppError ? error.message : "Erro ao processar, tente novamente mais tarde.";

      toast.show({
        placement: "top",
        render: () => (
          <Toast bg="$red500" action="error" variant="outline">
            <ToastTitle color="$white">{title}</ToastTitle>
          </Toast>
        )
      })
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          alt="background" w="$full"
          h={624} position="absolute"
          defaultSource={BackgroundImg}
        />
        <VStack flex={1} px="$10" pb="$16">
          <Center my={114}>
            <Logo width={195} height={62} />
            <Text color="$gray100" fontSize="$sm" fontWeight="bold">
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="$gray100" fontWeight="bold" mb="$6">
              Crie sua conta
            </Heading>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirmar senha"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                  errorMessage={errors.confirmPassword?.message}
                />
              )}
            />
            <Button title="Criar e acessar" onPress={handleSubmit(handleSignUp)} isLoading={isLoading} />
          </Center>

          <Button title="Voltar para o login" variant="outline" mt="$12" onPress={handleGoBack} />

        </VStack>
      </VStack>
    </ScrollView>
  );
}