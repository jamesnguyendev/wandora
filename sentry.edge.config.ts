import * as Sentry from "@sentry/nextjs";
Sentry.init({
  dsn: "https://083afad960e6e3f1af4a6a47c90725a1@o4510322787221505.ingest.de.sentry.io/4510322788794448",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  // that it will also get attached to your source maps
});
