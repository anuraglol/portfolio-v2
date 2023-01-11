import { Avatar, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <Flex color="neutral.100" gap="3" alignItems="center">
      <Avatar
        src="/images/avatar.jpg"
        size={{ base: "lg", md: "xl" }}
        filter="grayscale(10%)"
        name="Anurag"
      />
      <Flex direction="column">
        <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} fontWeight="500">
          Hello, I&apos;m Anurag
        </Text>
        <Text color="neutral.300">
          Frontend Engineer Based in India, He/Him
        </Text>
      </Flex>
    </Flex>
  );
};

export { Hero };
