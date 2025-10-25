import { createRequestHandler } from "@remix-run/vercel";
// @ts-ignore
const build = require("../build/server");

// Vercel serverless entry. Exports default handler used by Vercel for all
// incoming requests. Remix's server build is imported from `./build`.
export default createRequestHandler({ build, mode: process.env.NODE_ENV });
