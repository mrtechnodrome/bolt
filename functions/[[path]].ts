// This file was originally a Cloudflare Pages handler. For Vercel we use a
// dedicated server entry at `api/index.ts`. Keep this file as-is for
// reference but export a helpful message to avoid accidental invocation.
export const onRequest = async () => {
  return new Response('This handler is for Cloudflare Pages. Use the Vercel server entry instead.', { status: 501 });
};
