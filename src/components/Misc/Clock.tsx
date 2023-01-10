import { Flex, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { RxClock } from "react-icons/rx";

const Clock: FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex mt="2" gap="2">
      <RxClock size={25} />

      <Text>
        {time.toLocaleTimeString()},{" "}
        {new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </Text>
    </Flex>
  );
};

export { Clock };
