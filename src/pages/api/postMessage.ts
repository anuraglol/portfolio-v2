import { postMsg } from "@/utils/api/postMsg";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { message } = req.body;
    try {
      await postMsg(message);

      return res.status(200).json({ message: "Message sent" });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

export default handler;
