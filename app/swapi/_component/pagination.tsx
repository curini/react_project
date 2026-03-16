import Link from "next/link";

export default function Pagination({
  currentPage,
  maxPage,
  url,
}: {
  currentPage: number;
  maxPage: number;
  url: string;
}) {
  return (
    <div className="mt-2 mb-2">
      {Array.from({ length: maxPage }).map((value, index) => {
        const realIndex = index + 1;
        return realIndex == currentPage ? (
          <span
            key={index}
            className="border px-2 py-2 cursor-not-allowed bg-gray-200"
          >
            {realIndex}
          </span>
        ) : (
          <Link
            key={index}
            className="border px-2 py-2 hover:bg-black hover:text-white"
            href={url + "?page=" + realIndex}
          >
            {realIndex}
          </Link>
        );
      })}
    </div>
  );
}
