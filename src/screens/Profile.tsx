import { useState } from "react";
import { ScrollView, TouchableOpacity, Alert } from "react-native";
import { VStack, Text, Center, Heading, useToast } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ToastMessage } from "@components/ToastMessage";

export function Profile() {
  const [userPhoto, setUserPhoto] = useState("https://github.com/jordan-ns.png");
  const toast = useToast();

  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 1,
        allowsEditing: true,
        aspect: [4, 4],
    });

    if (photoSelected.canceled) {
      return;
    }
    const photoURI = photoSelected.assets[0].uri;

    if ( photoURI ) {
      const photoInfo = (await FileSystem.getInfoAsync(photoURI)) as {
        size: number;
      }

      if ( photoInfo.size > 5 * 1024 * 1024 ) {
        return toast.show({
          placement: "top",
          render: ({ id }) => (
            <ToastMessage 
            id={id} 
            title="Imagem" 
            description="A imagem deve ter menos de 5MB." 
            action="error" 
            onClose={() => toast.close(id)} />
          )
        });
      }

      setUserPhoto(photoURI);
    } 
  } catch (error) {
    console.log(error);
  }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserPhoto
            source={{ uri: userPhoto }}
            size="xl"
            alt="Imagem do usuário"
          />
          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              mt="$2"
              mb="$8">
              Alterar Foto
            </Text>
          </TouchableOpacity>
          <Center w="$full" gap="$4">
            <Input
              placeholder="Nome"
              bg="$gray600"
            />
            <Input
              value="jordan@email.com"
              bg="$gray600"
              isReadOnly
            />
          </Center>
          <Heading
            alignSelf="flex-start"
            color="$gray200"
            fontSize="$md"
            mt="$12"
            mb="$2"
            fontFamily="$heading"
          >
            Alterar senha
          </Heading>
          <Center w="$full" gap="$4">
            <Input
              placeholder="Senha antiga"
              bg="$gray600"
              secureTextEntry
            />
            <Input
              placeholder="Nova senha"
              bg="$gray600"
              secureTextEntry
            />
            <Input
              placeholder="Confirmar nova senha"
              bg="$gray600"
              secureTextEntry
            />
            <Button
              title="Atualizar"
              mt="$4"
            />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  )
}