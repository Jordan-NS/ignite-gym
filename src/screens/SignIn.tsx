import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { VStack, Image, Center, Text, Heading, ScrollView, useToast, Toast, ToastTitle } from "@gluestack-ui/themed";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "@hooks/useAuth";

import Logo from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AppError } from "@utils/AppError";

type FormData = {
  email: string;
  password: string;
}

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const toast = useToast();
  const { signIn } = useAuth();



  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  async function handleSignIn({ email, password }: FormData) {
    try {
      setIsLoading(true);
      await signIn(email, password);
      
    } catch (error) {

      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : "Não foi possível entrar.";

      setIsLoading(false);

      toast.show({
        render: () => (
          <Toast bg="$red500" action="error" variant="outline">
            <ToastTitle color="$white">{title}</ToastTitle>
          </Toast>
        ),
        placement: "top",
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

          <Center gap="$2">
            <Heading color="$gray100" fontWeight="bold" mb="$6">
              Acesse sua conta
            </Heading>

            <Controller
              control={control}
              name="email"
              rules={{ required: "E-mail é obrigatório" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{ required: "Senha é obrigatória" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Button 
              title="Entrar" 
              onPress={handleSubmit(handleSignIn)} 
              isLoading={isLoading}
            />
          </Center>
          <Center flex={1} justifyContent="flex-end" mt="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">Ainda não tem acesso?</Text>
            <Button title="Criar conta" variant="outline" onPress={handleNewAccount} />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}