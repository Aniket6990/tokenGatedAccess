const dotenv = require("dotenv");
dotenv.config();

import Moralis from "moralis/node";
import { mongoConnect } from "./libs/mongo";

const serverUrl = "";
const appId = "";

Promise.all([
  Moralis.start({ serverUrl, appId }), //
  mongoConnect(),
]).then(() => {
  import("./app");
});
