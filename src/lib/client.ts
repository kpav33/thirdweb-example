import { createThirdwebClient } from "thirdweb";

// https://portal.thirdweb.com/typescript/v5/client
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
