"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/client";

// https://portal.thirdweb.com/references/typescript/v5 => Docs for UI components, React Hooks and Core Functions
// https://playground.thirdweb.com/connect/sign-in/button => Playground for thirdweb interactions
export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="container max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          Hello Thirdweb!
        </h1>
      </header>

      {/* Content Section */}
      <section className="container max-w-screen-lg mx-auto mt-20">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Connect Your Wallet
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Click the button below to connect your wallet and get started.
          </p>

          <div className="flex justify-center">
            <ConnectButton
              client={client}
              appMetadata={{
                name: "Example App",
                url: "https://example.com",
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Example App. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
