import { trackSchema, trackType } from "@/schemas/track";
import axios from "axios";

const getNowPlaying = async (): Promise<trackType> => {
  const { data } = await axios.get("/api/now-playing");

  return trackSchema.parse(data);
};

export { getNowPlaying };
