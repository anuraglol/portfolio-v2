import { DISCORD_HANDLER } from "@/lib/constants/urls";
import styles from "@/styles/tooltip.module.css";
import { Flex, Text, useClipboard } from "@chakra-ui/react";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import { FC } from "react";

const DiscordElement: FC = () => {
  const { onCopy, hasCopied } = useClipboard(DISCORD_HANDLER);

  return (
    <Flex alignItems="center" gap="6" w="full">
      <Text color="neutral.400" w="20">
        Discord
      </Text>
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger asChild>
            <Text
              color="neutral.300"
              display="flex"
              alignItems="center"
              gap="1"
              cursor="pointer"
              onClick={onCopy}
            >
              {hasCopied ? "Copied" : DISCORD_HANDLER}
              {hasCopied ? <CheckIcon /> : <CopyIcon />}
            </Text>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content sideOffset={5} className={styles.TooltipContent}>
              Copy to clipboard
              <Tooltip.Arrow className={styles.TooltipArrow} />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </Flex>
  );
};

export { DiscordElement };
