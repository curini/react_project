import { useState } from "react";

export default function Index() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Index</h1>
      <p className="text-lg">Number: {number}</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
      >
        Increment
      </button>
    </>
  );
}
