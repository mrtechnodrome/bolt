import { createRequestHandler } from "@remix-run/node";
import * as build from "../build/server/index.js";

export default createRequestHandler(build);