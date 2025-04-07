import { HStack, Text, VStack, Heading } from "@gluestack-ui/themed";

type Props = {
  name: string;
  group: string;
  hour: string;
}

export function HistoryCard({ name, group, hour }: Props) {
  return (
    <HStack
      w="$full"
      px="$5"
      py="$4"
      mb="$3"
      bg="$gray600"
      rounded="$md"
      alignItems="center"
      justifyContent="space-between">
      <VStack flex={1} mr="$5">
        <Heading 
        color="$white" 
        fontSize="$md"
        textTransform="capitalize"
        fontFamily="$heading"
        numberOfLines={1}
        >
          {name}
        </Heading>
        <Text color="$gray100" fontSize="$lg" >
          {group}
        </Text>
      </VStack>
      <Text color="$gray300" fontSize="$md">
        {hour}
      </Text>
    </HStack>
  )
}