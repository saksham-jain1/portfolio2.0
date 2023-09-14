import React from "react";
import "./CircleAnimation.css";
import { Box, Text } from "@chakra-ui/react";

const CircleAnimation = ({ title, data, n }) => {
  return (
    <Box className="container">
      <Box className="globe-container">
        {Array.from({ length: 4 }).map((_, index) => (
          <Box
            className="globe-rotate"
            style={{ transform: `rotateY(${index * 45}deg)` }}
            key={index}
          ></Box>
        ))}
      </Box>

      {data?.map(({ title, link }, ind) => {
        return (
          <Box
            className="circle"
            val={title}
            key={ind}
            bg="white"
            style={{
              animationDelay: `${n - ind * 3}s`,
              animationDuration: `${n + 3}s`,
            }}
          >
            <img src={link} alt={title} />
          </Box>
        );
      })}
      <Text
        fontSize="1.3rem"
        position="absolute"
        top="56%"
        bg="black"
        borderRadius="lg"
        py=".5rem"
        px="1rem"
        color="white"
      >
        {title}
      </Text>
    </Box>
  );
};

export default CircleAnimation;
