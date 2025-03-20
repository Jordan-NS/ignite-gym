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
      <VStack mr="$5">
        <Heading 
        color="$white" 
        fontSize="$md"
        textTransform="capitalize"
        fontFamily="$heading"
        >
          {name}
        </Heading>
        <Text color="$gray100" fontSize="$lg" numberOfLines={1}>
          {group}
        </Text>
      </VStack>
      <Text color="$gray300" fontSize="$md">
        {hour}
      </Text>
    </HStack>
  )
}