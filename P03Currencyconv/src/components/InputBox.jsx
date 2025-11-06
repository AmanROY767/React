import React from "react";

export function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
}) {
  return (
    <div className="bg-white p-3 rounded-lg flex justify-between">
      <div className="w-1/2">
        <label className="text-gray-600 mb-2 block">{label}</label>
        <input
          type="number"
          className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="w-1/3 flex flex-col items-end">
        <label className="text-gray-600 mb-2 block">Currency</label>
        <select
          className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default InputBox;