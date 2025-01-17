import { useConnectModal } from "thirdweb/react";
import { client } from "@/lib/client";

export default function CustomConnectButton() {
  const { connect } = useConnectModal();

  return (
    // pass modal configuration options here
    <button onClick={() => connect({ client })}>Sign in</button>
  );
}
