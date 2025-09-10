import { useState } from "react";

export default function MortgageCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const principal = parseFloat(amount);
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const payments = parseFloat(years) * 12;

    if (principal && monthlyRate && payments) {
      const x = Math.pow(1 + monthlyRate, payments);
      const monthly = (principal * x * monthlyRate) / (x - 1);
      setResult(monthly.toFixed(2));
    }
  };

  return (
    <div>
      <input type="number" placeholder="Loan Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <input type="number" placeholder="Interest Rate (%)" value={rate} onChange={e => setRate(e.target.value)} />
      <input type="number" placeholder="Years" value={years} onChange={e => setYears(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
      {result && <h3>Monthly Payment: ${result}</h3>}
    </div>
  );
}
