import { Footer } from "@/components/Misc/Footer";
import { About } from "@/components/Sections/About";
import { Hero } from "@/components/Sections/Hero";
import { Connect } from "@/components/Sections/Links";
import { Work } from "@/components/Sections/Work";
import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      minH="100vh"
      w="full"
      bg="primary"
      display="flex"
      flexDir="column"
      gap="12"
      px="24rem"
      py="36"
      color="white"
    >
      <Hero />
      <About />
      <Work />
      <Connect />
      <Footer />
    </Box>
  );
};

export default Home;
