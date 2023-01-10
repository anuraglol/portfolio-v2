import { Footer } from "@/components/Misc/Footer";
import { About } from "@/components/Sections/About";
import { Hero } from "@/components/Sections/Hero";
import { Connect } from "@/components/Sections/Links";
import { Work } from "@/components/Sections/Work";
import { DEFAULT_FONT_SIZES, DEFAULT_X_PADDING } from "@/lib/constants/ui";
import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      minH="100vh"
      minW="full"
      bg="primary"
      py="36"
      color="white"
      fontSize={DEFAULT_FONT_SIZES}
      overflowX="hidden"
    >
      <Flex direction="column" gap="12" px={DEFAULT_X_PADDING}>
        <Hero />
        <About />
        <Work />
        <Connect />
        <Footer />
      </Flex>
    </Box>
  );
};

export default Home;
