import { GITHUB_REPO } from "@/lib/constants/urls";
import { Flex, Link, Text } from "@chakra-ui/react";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Flex
      textAlign="center"
      w="full"
      justifyContent="center"
      direction="column"
      fontSize={{
        base: "xs",
        md: "md",
      }}
      mt="6"
    >
      <Text color="neutral.300">
        The code for this website is available on{" "}
        <Link href={GITHUB_REPO} isExternal>
          <Text
            as="span"
            fontFamily="secondary"
            textDecor="underline"
            fontWeight="medium"
          >
            github
          </Text>
        </Link>
        .
      </Text>
      <Text color="neutral.400">
        Thanks for visiting! Have a happy day {";)"}
      </Text>
    </Flex>
  );
};

export { Footer };
