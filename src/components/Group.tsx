import { ComponentProps } from "react";
import { Button, Text } from "@gluestack-ui/themed";

type Props = ComponentProps<typeof Button> & {
  name: string
  isActive?: boolean
}

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Button
      {...rest}
      mr="$3"
      minWidth="$24"
      height="$10"
      bg="$gray600"
      rounded="$md"
      justifyContent="center"
      alignItems="center"
      borderColor="$green500"
      borderWidth={isActive ? 1 : 0}
      sx={{
        ":active": {
          borderWidth: 1,
        },
      }}
    >
      <Text
        color={isActive ? "$green500" : "$gray200"}
        fontSize="$xs"
        textTransform="uppercase"
        fontFamily="$heading"
      >
        {name}
      </Text>
    </Button>
  )
}