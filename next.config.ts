

import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";


const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

};

const sentryWebpackPluginOptions = {
  org: "common-block-studios",
  project: "javascript-nextjs",

  silent: !process.env.CI, // Only log during CI builds

  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,

 
};


export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
