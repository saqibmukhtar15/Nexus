import { useState } from "react";

export default function Wallet() {
  const [balance, setBalance] = useState(1000);

  return (
    <div>
      <h2>Balance: ${balance}</h2>

      <button onClick={() => setBalance(balance + 100)}>
        Deposit
      </button>

      <button onClick={() => setBalance(balance - 50)}>
        Withdraw
      </button>
    </div>
  );
}