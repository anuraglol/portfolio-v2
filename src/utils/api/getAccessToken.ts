import axios from "axios";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${refresh_token}`;

const getAccessToken = async () => {
  let headersList = {
    Accept: "*/*",
    Authorization: `Basic ${basic}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  let reqOptions = {
    url: TOKEN_ENDPOINT,
    method: "POST",
    headers: headersList,
  };

  const response = await axios.request(reqOptions);

  return response.data;
};

export { getAccessToken };
