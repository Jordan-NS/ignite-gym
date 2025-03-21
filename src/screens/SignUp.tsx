import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
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
          <Center my={54}>
            <Logo width={195} height={62} />
            <Text color="$gray100" fontSize="$sm" fontWeight="bold">
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="$gray100" fontWeight="bold">
              Crie sua conta
            </Heading>
            <Input
              placeholder="Nome"
              autoCapitalize="none" />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none" />

            <Input
              placeholder="Senha"
              secureTextEntry />

            <Button title="Criar e acessar" />
          </Center>

          <Button title="Voltar para o login" variant="outline" mt="$12" onPress={handleGoBack} />

        </VStack>
      </VStack>
    </ScrollView>
  );
}