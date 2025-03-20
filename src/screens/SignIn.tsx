import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

import Logo from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("signUp");
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
            <Heading color="$gray100" fontWeight="bold">
              Acesse sua conta
            </Heading>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none" />

            <Input
              placeholder="Senha"
              secureTextEntry />

            <Button title="Entrar" />
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