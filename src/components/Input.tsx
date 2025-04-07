import { ComponentProps } from "react";
import { Input as GluestackInput, InputField, FormControl, FormControlError } from "@gluestack-ui/themed";
import { FormControlErrorText } from "@gluestack-ui/themed";

type props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean
  errorMessage?: string | null
  isInvalid?: boolean
}

export function Input({ isReadOnly = false, errorMessage = null, isInvalid = false, ...rest }: props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb="$4" w="$full">
      <GluestackInput
        isInvalid={invalid}
        h="$14"
        borderWidth="$0"
        borderRadius="$md"
        $focus={{
          borderWidth: "$1",
          borderColor: invalid ? "$red500" : "$green500",
        }}
        $invalid={{
          borderWidth: "$1",
          borderColor: "$red500",
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
      >
        <InputField
          px="$4"
          bg="$gray700"
          placeholder="E-mail" {...rest}
          color="$white"
          fontFamily="$body"
          placeholderTextColor="$gray300"
        />
      </GluestackInput>

      <FormControlError>
        <FormControlErrorText color="$red500">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}