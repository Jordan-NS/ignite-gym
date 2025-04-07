import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { TouchableOpacity, ScrollView } from "react-native";
import { VStack, HStack, Icon, Text, Heading, Image, Box } from "@gluestack-ui/themed";

import { ArrowLeft } from "lucide-react-native"
import BodySvg from "@assets/body.svg"
import SeriesSvg from "@assets/series.svg"
import RepetitionsSvg from "@assets/repetitions.svg"
import { Button } from "@components/Button"

export function Exercise() {

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px="$8" bg="$gray600" pt="$12">
        <HStack justifyContent="space-between" alignItems="center">
          <TouchableOpacity onPress={handleGoBack}>
            <Icon as={ArrowLeft} size="xl" color="$green500" />
          </TouchableOpacity>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center" mt="$4" mb="$8">
          <Heading color="$gray100" fontSize="$lg" fontFamily="$heading" flexShrink={1}>
            Puxada Frontal
          </Heading>
        <HStack alignItems="center">
          <BodySvg />
          <Text color="$gray200" ml="$1" textTransform="capitalize">Costas</Text>
        </HStack>
        </HStack>
      </VStack>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
        <VStack p="$8">
        <Image source={{ uri: "https://static.wixstatic.com/media/2edbed_cf8feb6f79494833b887104bc358843d~mv2.gif/v1/fill/w_980,h_980,al_c,usm_0.66_1.00_0.01,pstr/2edbed_cf8feb6f79494833b887104bc358843d~mv2.gif" }} alt="Nome do exercício" mb="$3" resizeMode="cover" rounded="$lg" w="$full" h="$80" />
        <Box bg="$gray600" rounded="$md" pb="$4" px="$4">
          <HStack alignItems="center" justifyContent="space-around" mb="$6" mt="$5">
            <HStack>
              <SeriesSvg />
              <Text color="$gray200" ml="$2" mt="$1">3 séries</Text>
            </HStack>
            <HStack>
              <RepetitionsSvg />
              <Text color="$gray200" ml="$2" mt="$1">12 repetições</Text>
            </HStack>
          </HStack>
          <Button title="Marcar como realizado" />
        </Box>
      </VStack>
      </ScrollView>
    </VStack>
  )
}