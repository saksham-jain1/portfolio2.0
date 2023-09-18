import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.pageX, y: e.pageY - 80 });
    };

    const handleMouseOut = () => {
      setPos({ x: -100, y: -100 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <Box
      className="cursor"
      position="absolute"
      pointerEvents="none"
      zIndex="100"
      h="36px"
      w="36px"
      borderRadius="full"
      border="2.5px solid black"
      display="flex"
      justifyContent="center"
      alignItems="center"
      top={pos.y}
      left={pos.x}
      transform="translate(-50%, -50%)"
    >
      <Box h="6px" w="6px" borderRadius="full" bg="black"></Box>
    </Box>
  );
};

export default Cursor;
