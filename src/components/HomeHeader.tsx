import { VStack, HStack, Text, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native"

import { UserPhoto } from "./UserPhoto";



export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto 
        source={{ uri: "https://github.com/jordan-ns.png" }}
        alt="User photo"
        w="$16"
        h="$16"
      />
      <VStack flex={1}>
        <Text color="$gray200" fontSize="$md">
          Olá,
        </Text>
        <Text color="$gray100" fontSize="$md" fontFamily="$heading">
          Jordan
        </Text>
      </VStack>
      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  )
}