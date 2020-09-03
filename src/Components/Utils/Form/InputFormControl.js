import {
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/core";
import React from "react";

const InputFormControl = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  isRequired = true,
  iconName = null,
  iconColor = "black",
  rightElement = null,
  isDisabled = false,
  // opérateur spread
  ...additionalInputProperties
}) => (
  <FormControl isRequired={isRequired}>
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <InputGroup>
      {iconName && (
        <InputLeftElement
          children={<Icon name={iconName} color={iconColor} />}
        />
      )}

      <Input
        variant="outline"
        type={type}
        name={name}
        id={id}
        className="form-control"
        placeholder={placeholder}
        {...additionalInputProperties}
      />

      {rightElement && (
        <InputRightElement width="4.5rem">{rightElement}</InputRightElement>
      )}
    </InputGroup>
  </FormControl>
);

export default InputFormControl;
