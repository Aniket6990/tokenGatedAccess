const dotenv = require("dotenv");
dotenv.config();

import Moralis from "moralis/node";
import { mongoConnect } from "./libs/mongo";

const serverUrl = "https://u7hxzk1zphhy.usemoralis.com:2053/server";
const appId = "bbzmlOf352Kd7AM83Icgu9e9XES7gKAwgv0sEFgm";

Promise.all([
  Moralis.start({ serverUrl, appId }), //
  mongoConnect(),
]).then(() => {
  import("./app");
});
