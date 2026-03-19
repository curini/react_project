import Link from "next/link";

export default function Nav() {
  const classNameLink = "hover:bg-white hover:text-black h-full py-2 px-1";
  const links = [
    { name: "Home", url: "/" },
    { name: "Swapi", url: "/swapi" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <nav className="bg-black flex gap-4 text-white justify-center">
      {links.map((value, key) => (
        <Link key={key} href={value.url} className={classNameLink}>
          {value.name}
        </Link>
      ))}
    </nav>
  );
}
