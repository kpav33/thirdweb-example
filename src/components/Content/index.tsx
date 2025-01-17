"use client";

import React, { useState, useEffect } from "react";

import { ConnectButton } from "thirdweb/react";
import CustomConnectButton from "./CustomConnectButton";
import ConnectButtonModified from "./ConnectButtonModified";

import {
  useActiveAccount,
  useWalletBalance,
  useChainMetadata,
  useWaitForReceipt,
} from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";

// When working with blockchain interaction use non-react (non hook functions) for easier work
// https://portal.thirdweb.com/typescript/v5/transactions/read
import { readContract, prepareContractCall, toWei } from "thirdweb";

import { getContract } from "thirdweb";
import { sepolia, mainnet } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";
// Extension (precompiled, type-safe and highly optimized implementations of common standards such as ERC20, ERC721, ERC1155) we want to use for sending transaction
import { transfer } from "thirdweb/extensions/erc20";

import { useReadContract } from "thirdweb/react";

import { client } from "@/lib/client";

const USDC_ADDRESS = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";
const CHAIN = {
  rpc: "https://eth.drpc.org",
  id: 1,
};

export default function Content() {
  const { data: chainMetadata } = useChainMetadata(sepolia);
  // console.log("chainMetaData ", chainMetadata);

  // WALLET INTERACTION
  // Get connected account address, can also be used for signing and sending transcations
  const account = useActiveAccount();

  const {
    data: balance,
    isLoading,
    isError,
  } = useWalletBalance({
    client,
    // chain: CHAIN,
    chain: mainnet,
    address: account?.address,
    // Pass specific token address for that tokens balance
    // tokenAddress,
  });

  // const {
  //   data: balanceUsdc,
  //   isLoading: isLoadingUsdc,
  //   isError: isErrorUsdc,
  // } = useWalletBalance({
  //   client,
  //   chain: {
  //     rpc: "https://sepolia.drpc.org",
  //     id: 11155111,
  //   },
  //   address: account?.address,
  //   // Pass specific token address for that tokens balance
  //   tokenAddress: USDC_ADDRESS,
  // });
  // console.log("balanceUsdc ", balanceUsdc);

  // console.log("Balance ", balance);
  // console.log("isLoading ", isLoading);
  // console.log("account ", account);

  // SENDING TRANSACTION
  // When sending transaction we need to use extensions to prepare for them
  // Target contract
  const USDC = getContract({
    client,
    address: USDC_ADDRESS,
    chain: sepolia,
  });

  // Call the hook
  const { mutate: sendTransaction, isPending } = useSendTransaction();

  const onClickSend = () => {
    // Execute the transaction
    const transaction = transfer({
      contract: USDC,
      amount: 1,
      to: "0xd554C7878E269E317Fdf2aCC15C13fbb2fd788CC",
    });

    sendTransaction(transaction, {
      onSuccess: (txHash) => {
        console.log("Transaction sent, waiting for confirmation", txHash);
      },
      // onSettled: (receipt) => {
      //   console.log(receipt);
      // },
      onError: (error) => {
        console.error("Transaction failed:", error);
      },
    });
  };

  // READING CONTRACT
  const contract = getContract({
    client,
    chain: sepolia,
    address: USDC_ADDRESS,
  });

  const {
    data: dataRead,
    isLoading: isLoadingRead,
    error: errorRead,
  } = useReadContract({
    contract,
    method: "function admin() view returns (address)",
    // params: [1n],
    params: [],
  });

  // console.log("Data read ", dataRead);
  // console.log("errorRead ", errorRead);

  // Without hooks, just regular typescript
  const readContractCall = async () => {
    const contractReturn = await readContract({
      contract: contract,
      method: "function admin() view returns (address)",
      params: [],
    });

    // console.log("contractReturn ", contractReturn);
  };

  useEffect(() => {
    readContractCall();
  }, []);

  return (
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

        <div className="flex justify-center mt-5">
          <CustomConnectButton />
        </div>

        <div className="flex justify-center mt-5">
          <ConnectButtonModified />
        </div>
      </div>

      {account && (
        <div className="bg-gray-200 shadow-sm rounded-lg p-6 mt-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Wallet Details
          </h3>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Address:</span>{" "}
            {shortenAddress(account?.address || "")}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Balance:</span>{" "}
            {balance?.displayValue} {balance?.symbol}
          </p>
        </div>
      )}

      <div className="flex justify-center mt-6">
        <button
          onClick={onClickSend}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Send Transaction
        </button>
      </div>
    </section>
  );
}
