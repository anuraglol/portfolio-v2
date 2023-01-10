import { getNowPlaying } from "@/utils/api/getNowPlaying";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const song = await getNowPlaying();

  if (song.is_playing) {
    return res.status(200).json({
      isPlaying: song.is_playing,
      title: song.item.name!,
      url: song.item.external_urls.spotify!,
    });
  } else {
    return res.status(200).json({
      isPlaying: false,
    });
  }
}
