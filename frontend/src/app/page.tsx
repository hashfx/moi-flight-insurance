'use client';
import Landing from "@/containers/Landing/Landing";
import { useAuth } from "@/context/AuthProvider";
import logic from "@/interface/logic";

export default function Home() {
  const {wallet} = useAuth();
  const {GetTokenName,
    GetTokenBalanceOf,
    GetNextClaim,
    GetTokenClaimAmount,
    GetTokenDecimals,
    GetTokenSymbol,
    ClaimToken,
    UpdateFlightDelayStatus,
    PurchasePolicy,
    ClaimPolicy,
    PolicyStatus,
    Transfer,
    Approve,
    TotalSupply,
    ClaimInterval,
    NextClaim} = logic;
    const LogicTest = async () => {
      const [{name}, {balance}, {nextClaim}, {claimAmount}, {decimals}, {symbol}, {claimInterval}] = await Promise.all([
        GetTokenName(),
        GetTokenBalanceOf(wallet?.getAddress()),
        GetNextClaim(wallet?.getAddress()),
        GetTokenClaimAmount(),
        GetTokenDecimals(),
        GetTokenSymbol(),
        ClaimInterval(wallet)
      ]);
      console.log(name, balance, nextClaim, claimAmount, decimals, symbol, claimInterval);
  }
  LogicTest();
  return (
    <main className="">
      <Landing />
    </main>
  );
}
