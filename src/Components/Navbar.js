import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const Navbar = ({ percentage }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      w="100%"
      bg={colorMode === "light" ? "whiteAlpha.800" : "blackAlpha.700"}
      position="fixed"
      top="0"
      zIndex={9}
      boxShadow="lg"
      h="80px"
    >
      <Box h="5px" className="progress" w={percentage + "%"}></Box>
      <Flex justifyContent="space-between" alignItems="center" px="5">
        <Box
          fontSize="1.3rem"
          my="3"
          gap="2"
          display="flex"
          alignItems="center"
          cursor="pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Avatar name="Saksham Jain" size="md" src={logo} />
          <Text fontFamily="'cursive','Times New Roman'"> Saksham Jain </Text>
        </Box>
        <Button aria-label="color mode toggle" onClick={toggleColorMode} id="toggle">
          {colorMode === "dark" ? (
            <BsSunFill size={"24px"} color="#ECC94B" />
          ) : (
            <BsFillMoonStarsFill size={"24px"} color="#805AD5" />
          )}
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
