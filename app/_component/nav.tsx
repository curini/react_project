import Link from "next/link";

export default function Nav() {
  const classNameLink = "hover:bg-white hover:text-black h-full py-2 px-1";
  return (
    <nav className="bg-black flex gap-4 text-white justify-center">
      <Link href="/" className={classNameLink}>
        Home
      </Link>
      <Link href="/swapi" className={classNameLink}>
        Swapi
      </Link>
    </nav>
  );
}
