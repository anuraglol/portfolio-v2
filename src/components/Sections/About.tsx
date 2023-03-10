import { CANDYPAY_TWITTER_HANDLE } from "@/lib/constants/urls";
import { Flex, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { NowPlaying } from "../Misc/NowPlaying";

const About: FC = () => {
  return (
    <Flex color="neutral.100" gap="4" alignItems="center">
      <Flex direction="column" gap="2">
        <Text fontWeight="500">About</Text>
        <Text color="neutral.300">
          Tweaking interfaces, mostly in the{" "}
          <Text
            as="span"
            fontFamily="secondary"
            fontStyle="italic"
            cursor="pointer"
            color="neutral.100"
            _hover={{
              color: "#9900ff",
            }}
            transition="all"
            transitionDuration="0.25"
          >
            web3
          </Text>{" "}
          space. Web engineer at{" "}
          <Link href={CANDYPAY_TWITTER_HANDLE} isExternal>
            <Text
              as="span"
              fontFamily="secondary"
              fontStyle="italic"
              textDecor="underline"
            >
              CandyPay
            </Text>
          </Link>
          .
        </Text>

        <NowPlaying />
      </Flex>
    </Flex>
  );
};

export { About };
