import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://167b88495887f14858c5070e3af1070b@o4509039929982976.ingest.us.sentry.io/4509039938830336",

  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});