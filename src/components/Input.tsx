import { ComponentProps } from "react";
import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";

type props = ComponentProps<typeof InputField>

export function Input({...rest}: props) {
  return (
    <GluestackInput
      bg="$gray700"
      h="$14"
      px="$4"
      borderWidth="$0"
      borderRadius="$md"
      $focus={{
        borderWidth: "$1",
        borderColor: "$green500",
      }}

    >
      <InputField 
      placeholder="E-mail" {...rest}
      color="$white"
      fontFamily="$body"
      placeholderTextColor="$gray300"
      />
    </GluestackInput>
  )
}