import { Button as GluestackButton, Text, ButtonSpinner } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type props = ComponentProps<typeof GluestackButton> & {
  title: string;
  isLoading?: boolean;
  variant?: "solid" | "outline";
}

export function Button({title, variant = "solid", isLoading = false, ...rest}: props) {
  return (
    <GluestackButton
    w="$full"
    h="$14"
    bg={variant === "outline" ? "transparent" : "$green700"}
    borderWidth={variant === "outline" ? "$1" : "$0"}
    borderColor={variant === "outline" ? "$green500" : "$green700"}
    rounded="$sm"
    $active-bg={variant === "outline" ? "$gray500" : "$green500"}
    disabled={isLoading}
    {...rest}
    >
      {isLoading ? <ButtonSpinner color="$white" /> : <Text color={variant === "outline" ? "$green500" : "$white"} fontFamily="$heading" fontSize="$sm">{title}</Text>}
    </GluestackButton>
  )
} 