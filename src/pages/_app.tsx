import { useEffect } from "react";
import { datadogRum } from "@datadog/browser-rum";
import { ApolloProvider } from "@apollo/client";

import type { AppProps } from "next/app";
import pokeapi from "@/utils/pokeapi";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  // default environment to production
  const env = process.env.NODE_ENV || "production";

  useEffect(() => {
    if (typeof window !== "undefined") {
      datadogRum.init({
        applicationId: "d20a4240-5e2e-4718-ab8b-03f279d48416",
        clientToken: "pub1c190062f1773a222732e4757f7549f2",
        site: "us5.datadoghq.com",
        service: "dm-demo-application",
        env,
        // Specify a version number to identify the deployed version of your application in Datadog
        // version: '1.0.0',
        sessionSampleRate: 100,
        premiumSampleRate: 100,
        trackUserInteractions: true,
        defaultPrivacyLevel: "mask-user-input",
      });

      datadogRum.startSessionReplayRecording();
    }
  }, [window]);

  return (
    <ApolloProvider client={pokeapi}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
