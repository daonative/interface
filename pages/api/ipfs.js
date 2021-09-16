import { create } from "ipfs-http-client";

/* Create an instance of the client */

/* or a string */

async function handler(req, res) {
  const client = create("https://ipfs.infura.io:5001/api/v0");
  const added = await client.add(JSON.stringify(req.body));

  res.status(200).json(added);
}
export default handler;
