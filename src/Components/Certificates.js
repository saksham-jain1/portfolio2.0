import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import data from "../data/data.js";

const Certificates = () => {
  return (
    <Flex
      id="certificates"
      w="100%"
      position="relative"
      flexWrap="wrap"
      py="3rem"
      justifyContent="space-evenly"
    >
      <Heading
        zIndex="1"
        textAlign="center"
        width="100%"
        mb="1rem"
        borderBottom="2px solid Black"
        fontSize={{ base: "3rem", md: "4rem" }}
        mx={{ base: "1rem", md: "3rem" }}
      >
        Certificates
      </Heading>
      {data.certificates.map((i, ind) => {
        return (
          <Box position="relative" m="3" w="300px" maxW="90%" key={ind}>
            <Image
              w="300px"
              h="200px"
              borderRadius="2xl"
              loading="lazy"
              src={i.img}
              alt={i.title}
            />
            <Text
              textAlign="center"
              py="2"
              color="white"
              bg="blackAlpha.700"
              w="100%"
              h="-webkit-fit-content"
              position="absolute"
              bottom="0"
              borderRadius="lg"
              fontSize="1rem"
              letterSpacing=".8px"
            >
              {i.title}
            </Text>
          </Box>
        );
      })}
      <Button mt="4" w="90%" colorScheme="yellow">
        All Certificates
      </Button>
    </Flex>
  );
};

export default Certificates;
