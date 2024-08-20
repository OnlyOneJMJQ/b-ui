"use client";
import { http } from "viem";
import "@rainbow-me/rainbowkit/styles.css";
import { BiconomyProvider } from "@biconomy/use-aa";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

if (
  !process.env.NEXT_PUBLIC_PAYMASTER_API_KEY ||
  !process.env.NEXT_PUBLIC_BUNDLER_URL
) {
  throw new Error("Missing env var");
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const paymasterApiKey = process.env.NEXT_PUBLIC_PAYMASTER_API_KEY || "";
  const bundlerUrl = process.env.NEXT_PUBLIC_BUNDLER_URL || "";

  const config = getDefaultConfig({
    appName: "Biconomy Take-Home",
    projectId: "fb73b4f82d294ace4efb2b3802b2574e",
    chains: [sepolia],
    ssr: true,
  });
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <BiconomyProvider
            config={{
              biconomyPaymasterApiKey: paymasterApiKey,
              bundlerUrl,
            }}
            queryClient={queryClient}
          >
            {children}
          </BiconomyProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
