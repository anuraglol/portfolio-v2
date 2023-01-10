import { getNowPlaying } from "@/utils/helpers/getNowPlaying";
import { Flex, Link, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { BsSpotify } from "react-icons/bs";

const NowPlaying: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getNowPlaying,
    refetchOnWindowFocus: true,
  });

  return (
    <Flex mt="2" gap="2">
      <BsSpotify size={24} />
      {data?.isPlaying ? (
        <Link
          href={data?.url}
          isExternal
          textDecor="none"
          _hover={{ textDecor: "none" }}
        >
          Listening to {data?.title}
        </Link>
      ) : (
        <Text>Not playing anything</Text>
      )}
    </Flex>
  );
};

export { NowPlaying };
