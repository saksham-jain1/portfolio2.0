import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Tag,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <Box
      h="450px"
      w="300px"
      bg="white"
      borderRadius="xl"
      my="1rem"
      boxShadow={
        colorMode !== "light" ? "0px 0px 8px #fff" : "0px 0px 30px #000"
      }
      border="1px"
    >
      <Image
        p="2"
        loading="lazy"
        src={data.img}
        alt={data.name}
        borderRadius="xl"
        maxH="175px"
        w="100%"
      />
      <Flex
        color="black"
        direction="column"
        h="270px"
        px={{ base: "2", md: "3" }}
      >
        <Heading className="ellipse" fontSize="1.5rem" textAlign="center">
          {data.name}
        </Heading>
        <Text flex="1">
          <b>Description: </b>
          {data.detail}
        </Text>
        <b style={{ marginTop: "2",flex:1 }}>
          Tech-Used:
          {data.tech?.map((i) => {
            return (
              <Tag
                mx="1"
                my="0.5"
                key={i}
                variant="solid"
                size="md"
                colorScheme="green"
              >
                {i}
              </Tag>
            );
          })}
        </b>
        <Flex flexWrap="wrap" mt="1" justifyContent="space-evenly" gap="1.5">
          <Button as={Link} isExternal href={data.link1} colorScheme="teal">
            <BsGithub />
            &nbsp; Source Code
          </Button>
          {data.link2 && (
            <Button as={Link} isExternal href={data.link2} colorScheme="teal">
              <BiLinkExternal /> &nbsp; Live
            </Button>
          )}
          <Button
            w="100%"
            gap="3"
            colorScheme="blue"
            borderRadius="xl"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/project/${data.id}`);
            }}
          >
            Read More <IoInformationCircleOutline size="24px" />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
