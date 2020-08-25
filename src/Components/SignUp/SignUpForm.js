import React, {useState} from "react";
import { Button, Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/core";
import Icon from "@chakra-ui/core/dist/Icon";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormControl from "@chakra-ui/core/dist/FormControl";
<<<<<<< HEAD
//import './SignUpForm.scss';
=======
>>>>>>> 4271ffafe13ed0f43ff243d4bf78a704ec3c09dc
import Circle from "better-react-spinkit/dist/Circle";
import ButtonSubmitLoader from "../Utils/ButtonSubmitLoader";
import ButtonSubmitDefault from "../Utils/ButtonSubmitDefault";

<<<<<<< HEAD
const SignUpForm = ({ getSignUp, load, error }) => {
=======
const SignUpForm = ({ getSignUp, load }) => {

  const [title, setTitle] = useState("Sign up");

>>>>>>> 4271ffafe13ed0f43ff243d4bf78a704ec3c09dc
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
          <ButtonSubmitLoader />
        ) : (
            <ButtonSubmitDefault title={title} />
          )
        }
        </Stack>
      </form>
    </div>
  )
};

export default SignUpForm;
