import axios from "axios";

const postMsg = async (msg: string) => {
  const url = process.env[`DISCORD_WEBHOOK_URL`];

  const res = await axios.post(url, {
    content: `
      *message*: ${msg} \n*timestamp*: ${new Date().toLocaleString()}
      `,
  });

  return res;
};

export { postMsg };
