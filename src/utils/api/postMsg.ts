import axios from "axios";

const postMsg = async (msg: string) => {
  const url = process.env[`NEXT_PUBLIC_PROXY_API_URL`];

  const res = await axios.post(`${url}/postMessage`, {
    content: `
      *message*: ${msg} \n*timestamp*: ${new Date().toLocaleString()}
      `,
  });

  return res;
};

export { postMsg };
