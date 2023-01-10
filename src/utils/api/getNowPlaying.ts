import axios from "axios";
import { getAccessToken } from "./getAccessToken";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  const res = await axios.get(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res.data;
};
