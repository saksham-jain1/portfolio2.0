import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Tag,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Card = ({ data, id }) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <Flex
      h="500px"
      w="400px"
      maxW="calc(90vw - 60px - 1rem)"
      bg="whiteAlpha.900"
      borderRadius="xl"
      my="1rem"
      boxShadow={
        colorMode !== "light" ? "0px 0px 10px #fff" : "0px 0px 30px #000"
      }
      border="1px"
      flexDirection="column"
    >
      <Box p="3">
        <Image loading="lazy" src={data.img} alt={data.name} borderRadius="xl" />
      </Box>

      <Box w="100%" flex="1" position="relative">
        <Heading
          fontSize={{ base: "1.5rem", md: "2rem" }}
          textAlign="center"
          color="blackAlpha.700"
        >
          {data.name}
        </Heading>
        <Box
          px="1rem"
          fontSize="1rem"
          textAlign="justify"
          color="blackAlpha.900"
        >
          <b>Description: </b>
          {data.detail}
          <br />
          <b>Tech Used:</b>
          <Flex gap="2" wrap="wrap">
            {data.tech?.map((i) => {
              return (
                <Tag key={i} variant="solid" colorScheme="whatsapp">
                  {i}
                </Tag>
              );
            })}
          </Flex>
        </Box>
      </Box>
      <Box
        w="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        borderRadius="xl"
        gap="3"
      >
        <a href={data.link1}>
          <Button colorScheme="teal">
            <BsGithub />
            &nbsp; Source Code
          </Button>
        </a>
        {data.link2 && (
          <a href={data.link2}>
            <Button colorScheme="teal">
              <BiLinkExternal /> &nbsp; Live
            </Button>
          </a>
        )}
        <Button
          w="100%"
          gap="3"
          colorScheme="blue"
          borderRadius="xl"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/project/${id}`);
          }}
        >
          Read More <IoInformationCircleOutline size="26px" />
        </Button>
      </Box>
    </Flex>
  );
};

export default Card;
