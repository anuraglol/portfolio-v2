import { Builds } from "@/lib/constants/builds";
import { Flex, Link, Text } from "@chakra-ui/react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { FC } from "react";

interface IElementProps {
  aboutTime: string;
  name: string;
  url: string;
}

const Element: FC<IElementProps> = ({ aboutTime, name, url }) => {
  return (
    <Flex alignItems="center" gap="6" w="full">
      <Text color="neutral.400" w="20">
        {aboutTime}
      </Text>
      <Link href={url} isExternal>
        <Text color="neutral.300" display="flex" alignItems="center" gap="1">
          {name}
          <ArrowTopRightIcon />
        </Text>
      </Link>
    </Flex>
  );
};

const Work: FC = () => {
  return (
    <Flex color="neutral.100" gap="4" alignItems="center" w="full">
      <Flex direction="column" gap="4">
        <Text fontWeight="500">Builds</Text>
        <Flex direction="column" gap="6">
          {Builds.map((build, index) => (
            <Element
              key={index}
              {...{
                aboutTime: build.aboutTime,
                name: build.name,
                url: build.url,
              }}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export { Work };
