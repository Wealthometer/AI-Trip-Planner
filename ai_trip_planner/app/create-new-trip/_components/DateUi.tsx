import React, { useState } from "react";

function DateUi({ onSelectedOption }: any) {
  const [days, setDays] = useState(3); // default to 3 days

  const decrease = () => {
    if (days > 1) setDays(days - 1);
  };

  const increase = () => {
    setDays(days + 1);
  };

  const handleConfirm = () => {
    onSelectedOption(`${days} Days`);
  };

  return (
    <div className="p-4 border rounded-2xl bg-white flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-3">How many days do you want to travel?</h2>

      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={decrease}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-xl font-bold"
        >
          –
        </button>

        <span className="text-lg font-semibold">{days} Days</span>

        <button
          onClick={increase}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-xl font-bold"
        >
          +
        </button>
      </div>

      <button
        onClick={handleConfirm}
        className="bg-primary text-white px-6 py-2 rounded-lg"
      >
        Confirm
      </button>
    </div>
  );
}

export default DateUi;