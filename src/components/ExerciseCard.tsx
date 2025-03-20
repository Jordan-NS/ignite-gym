import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Image, VStack, Heading, Text, Icon } from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps & {}



export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="$gray500" alignItems="center" p="$2" pr="$4" rounded="$md" mb="$3">
        <Image
          source={{ uri: "https://static.wixstatic.com/media/2edbed_cf8feb6f79494833b887104bc358843d~mv2.gif/v1/fill/w_980,h_980,al_c,usm_0.66_1.00_0.01,pstr/2edbed_cf8feb6f79494833b887104bc358843d~mv2.gif" }}
          alt="Nome do exercício"
          w="$16"
          h="$16"
          rounded="md"
          mr="$4"
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading color="$white" fontSize="$lg" fontFamily="$heading">
            Remada
          </Heading>
          <Text color="$gray200" fontSize="$sm" fontFamily="$body" mt="$1" numberOfLines={2}>
            5 séries x 12 repetições
          </Text>
        </VStack>
        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  ) 
}