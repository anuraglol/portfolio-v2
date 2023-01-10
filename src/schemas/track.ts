import { z } from "zod";

const trackSchema = z.object({
  isPlaying: z.boolean(),
  title: z.string().optional(),
  url: z.string().url().optional(),
});

export type trackType = z.infer<typeof trackSchema>;

export { trackSchema };
