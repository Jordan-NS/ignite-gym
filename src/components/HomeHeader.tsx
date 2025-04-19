import { VStack, HStack, Text, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native"

import { useAuth } from "@hooks/useAuth";
import { UserPhoto } from "./UserPhoto";
import defaultUserPhotoImg from "@assets/userPhotoDefault.png";
import { TouchableOpacity } from "react-native";


export function HomeHeader() {
  const { user, signOut } = useAuth();


  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto 
        source={ user.avatar ? {uri: user.avatar } : defaultUserPhotoImg }
        alt="User photo"
        w="$16"
        h="$16"
      />
      <VStack flex={1}>
        <Text color="$gray200" fontSize="$md">
          Olá,
        </Text>
        <Text color="$gray100" fontSize="$md" fontFamily="$heading">
          {user.name}
        </Text>
      </VStack>
      <TouchableOpacity onPress={signOut}>
        <Icon as={LogOut} color="$gray200" size="xl" />
      </TouchableOpacity>
    </HStack>
  )
}