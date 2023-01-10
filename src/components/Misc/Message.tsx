import styles from "@/styles/tooltip.module.css";
import { Box, Flex, Input, Text, useToast } from "@chakra-ui/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FC, useState } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const MessageElement: FC = () => {
  const toast = useToast();
  const [message, setMessage] = useState<string>("");

  const { mutate, isLoading } = useMutation({
    mutationKey: ["postMessage"],
    mutationFn: async () => {
      await axios.post("/api/postMessage", {
        message,
      });
    },
    onSuccess: () => {
      toast({
        title: "Message Sent.",
        position: "bottom-right",
        status: "success",
        duration: 4000,
        isClosable: true,
        render: () => (
          <Box px="3" py="3" rounded="sm" bg="neutral.700" color="neutral.100">
            <Text fontWeight="500">Message Sent.</Text>
          </Box>
        ),
      });
    },
  });

  return (
    <Flex color="neutral.100" gap="4" w="full" direction="column">
      <Text fontWeight="500">Send me an anonymous message</Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate();
          setMessage("");
        }}
      >
        <Box
          w="full"
          rounded="md"
          bg="neutral.800"
          py="3"
          backdropBlur="3xl"
          px="4"
          fontWeight="medium"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Input
            variant="unstyled"
            placeholder="message here"
            _placeholder={{
              color: "neutral.500",
              fontWeight: "medium",
            }}
            rounded="none"
            w="full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            isRequired
          />
          <Tooltip.Provider>
            <Tooltip.Root delayDuration={100}>
              <Tooltip.Trigger asChild>
                <Box
                  cursor="pointer"
                  as="button"
                  color="neutral.200"
                  _hover={{
                    color: "neutral.400",
                  }}
                  transition="all"
                  transitionDuration="0.5"
                  type="submit"
                  disabled={isLoading}
                >
                  <HiOutlinePaperAirplane size={26} />
                </Box>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  sideOffset={5}
                  className={styles.TooltipContent}
                >
                  Send Message
                  <Tooltip.Arrow className={styles.TooltipArrow} />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </Box>
      </form>
    </Flex>
  );
};

export { MessageElement };