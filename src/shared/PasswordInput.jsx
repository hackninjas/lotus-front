import React from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { IconButton } from "@chakra-ui/button";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";


export const PasswordInput = ({value, handleChange, handleBlur}) => {
    const [hidden, setHidden] = React.useState(false);
    
    const handleClick = () => setHidden(!hidden);
  
    return (
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={hidden ? "text" : "password"}
          placeholder="Enter password"
          onChange={handleChange}
          value={value}
          onBlur={handleBlur}
          name="password"
        />
        <InputRightElement background="transparent">
          <IconButton
            aria-label="password toggle button"
            background="transparent"
            icon={hidden ? <ViewOffIcon  color="black"/> : <ViewIcon color="black"/>}
            onClick={handleClick}          
          />
        </InputRightElement>
      </InputGroup>
    );
  };