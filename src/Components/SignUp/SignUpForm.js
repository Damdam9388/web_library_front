
import React from "react";
import { Button, Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/core";
import Icon from "@chakra-ui/core/dist/Icon";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormControl from "@chakra-ui/core/dist/FormControl";
//import './SignUpForm.scss';
import Circle from "better-react-spinkit/dist/Circle";

const SignUpForm = ({ getSignUp, load, error }) => {
  return (
    <div className="form">
      <form onSubmit={getSignUp}>
        <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel htmlFor="InputEmail">UserName</FormLabel>
          <InputGroup>
            <InputLeftElement children={<Icon name="arrow-right" color="black" />} />
            <Input
              variant="outline"
              type="username"
              name="username"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter your user Name..."
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="InputEmail">Email</FormLabel>
          <InputGroup>
            <InputLeftElement children={<Icon name="email" color="black" />} />
            <Input
              variant="outline"
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email..."
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="InputEmail">Password</FormLabel>
          <InputGroup>
            <InputLeftElement children={<Icon name="lock" color="black" />} />
            <Input
              variant="outline"
              type="password"
              name="password"
              className="form-control"
              id="password"
              aria-describedby="passswordHelp"
              placeholder="Enter password..."
            />
          </InputGroup>
        </FormControl>
        {load ? (
          <Button
            type="submit"
            variantColor="telegram"
            variant="solid"
            width="full"
            border="transparent"

          >
            <Circle />
          </Button>
        ) : (
            <Button
              type="submit"
              rightIcon="arrow-forward"
              variantColor="telegram"
              variant="solid"
              width="150px"
              border="transparent"
            >
              Sign Up
            </Button>
          )
        }
        </Stack>
      </form>
    </div>
  )
};

export default SignUpForm;
