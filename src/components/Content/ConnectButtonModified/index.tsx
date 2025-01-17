import React from "react";

import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { lightTheme } from "thirdweb/react";
import { inAppWallet, createWallet } from "thirdweb/wallets";
import { ethereum } from "thirdweb/chains";

import { client } from "@/lib/client";

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
        "github",
        "steam",
        "line",
        "twitch",
        "apple",
        "facebook",
        "guest",
        "coinbase",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
  createWallet("com.trustwallet.app"),
];

export default function ConnectButtonModified() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      //   theme={lightTheme({
      //     colors: {
      //       modalBg: "hsl(300, 26%, 40%)",
      //       borderColor: "hsl(263, 28%, 42%)",
      //       accentText: "hsl(216, 41%, 29%)",
      //       separatorLine: "hsl(262, 49%, 27%)",
      //       tertiaryBg: "hsl(285, 52%, 56%)",
      //       skeletonBg: "hsl(274, 26%, 50%)",
      //       primaryText: "hsl(257, 42%, 71%)",
      //       secondaryText: "hsl(251, 50%, 46%)",
      //       selectedTextColor: "hsl(300, 62%, 22%)",
      //       selectedTextBg: "hsl(257, 90%, 14%)",
      //       primaryButtonBg: "hsl(257, 61%, 39%)",
      //       primaryButtonText: "hsl(300, 82%, 26%)",
      //       secondaryButtonBg: "hsl(274, 70%, 43%)",
      //       secondaryButtonText: "hsl(257, 81%, 15%)",
      //       secondaryButtonHoverBg: "hsl(263, 74%, 37%)",
      //       accentButtonBg: "hsl(216, 72%, 46%)",
      //       accentButtonText: "hsl(300, 30%, 49%)",
      //       connectedButtonBg: "hsl(300, 68%, 14%)",
      //       connectedButtonBgHover: "hsl(285, 62%, 49%)",
      //       secondaryIconColor: "hsl(251, 64%, 47%)",
      //       secondaryIconHoverColor: "hsl(257, 65%, 59%)",
      //       secondaryIconHoverBg: "hsl(274, 75%, 23%)",
      //       danger: "hsl(358, 71%, 45%)",
      //       success: "hsl(151, 83%, 26%)",
      //       tooltipBg: "hsl(257, 26%, 13%)",
      //       tooltipText: "hsl(300, 21%, 92%)",
      //       inputAutofillBg: "hsl(300, 12%, 15%)",
      //       scrollbarBg: "hsl(285, 38%, 46%)",
      //     },
      //   })}
      connectButton={{ label: "Hello World" }}
      connectModal={{
        size: "compact",
        title: "Hello",
        titleIcon: "https://cdn-icons-png.flaticon.com/512/10278/10278187.png",
        termsOfServiceUrl: "https://example.com/",
        privacyPolicyUrl: "https://example.com/",
      }}
      // Sponsor gas fees
      //   accountAbstraction={{
      //     chain: ethereum,
      //     sponsorGas: true,
      //   }}
      //   locale={"fr_FR"}
      //   // For SIWE
      //   auth={{
      //     async doLogin(params) {
      //       // call your backend to verify the signed payload passed in params
      //     },
      //     async doLogout() {
      //       // call your backend to logout the user if needed
      //     },
      //     async getLoginPayload(params) {
      //       // call your backend and return the payload
      //     },
      //     async isLoggedIn() {
      //       // call your backend to check if the user is logged in
      //     },
      //   }}
    />
  );
}
