import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/contact-us-board.json";
import animationData1 from "../assets/contact-email.json";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const toast = useToast();
  const handleSend = async (e) => {
    e.preventDefault();
    console.log(form);
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_62xxr8g",
        "template_d2zlyav",
        form.current,
        "8iveAGktHSBf_JWj6"
      );
      toast({
        title: "Mail Sent Successfully",
        description: "Thanks for contacting me",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to send the mail. Please try later",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <Box
      id="contact"
      w="100%"
      position="relative"
      display="flex"
      flexWrap="wrap"
    >
      <Heading
        zIndex="1"
        textAlign="center"
        width="100%"
        my="1rem"
        borderBottom="2px solid Black"
        fontSize={{ base: "3rem", md: "4rem" }}
        mx={{ base: "1rem", md: "3rem" }}
      >
        Contact Me
      </Heading>
      <Box w={{ base: "100%", md: "50%" }} display="flex">
        <Lottie animationData={animationData} />
      </Box>
      <Box
        width={{ base: "100%", md: "50%" }}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p="2rem"
      >
        {!loading ? (
          <form
            ref={form}
            onSubmit={handleSend}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              color: "black",
            }}
          >
            <Input
              boxShadow="dark-lg"
              borderRadius="lg"
              bg="whiteAlpha.900"
              p="1rem"
              variant="flushed"
              my="1rem"
              size="lg"
              placeholder="Name"
              name="name"
              isRequired
              _placeholder={{ color: "black", opacity: ".8" }}
            />
            <Input
              boxShadow="dark-lg"
              borderRadius="lg"
              bg="whiteAlpha.900"
              p="1rem"
              variant="flushed"
              my="1rem"
              size="lg"
              type="email"
              placeholder="E-mail"
              name="email"
              isRequired
              _placeholder={{ color: "black", opacity: ".8" }}
            />
            <Input
              boxShadow="dark-lg"
              borderRadius="lg"
              bg="whiteAlpha.900"
              p="1rem"
              variant="flushed"
              my="1rem"
              size="lg"
              placeholder="Subject"
              name="subject"
              _placeholder={{ color: "black", opacity: ".8" }}
            />
            <Textarea
              boxShadow="dark-lg"
              borderRadius="lg"
              bg="whiteAlpha.900"
              my="1rem"
              size="lg"
              placeholder="Write your message here"
              height="150px"
              name="message"
              isRequired
              _placeholder={{ color: "black", opacity: ".8" }}
            />
            <Button
              mt="2rem"
              boxShadow="dark-lg"
              size="lg"
              fontSize="1.6rem"
              colorScheme="blue"
              type="submit"
            >
              Send
            </Button>
          </form>
        ) : (
          <Lottie animationData={animationData1} />
        )}
      </Box>
    </Box>
  );
};

export default Contact;
