"use client";

export default function Button({ children }: { children: string }) {
  const handleClick = () => {
    console.log("c'est un clic");
  };

  return (
    <section>
      <button
        className="border border-black px-2 py-2 hover:bg-black hover:text-white cursor-pointer"
        onClick={handleClick}
      >
        {children}
      </button>
    </section>
  );
}
