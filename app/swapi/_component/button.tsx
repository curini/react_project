"use client";

import People from "@/app/swapi/_api/people";

export default function Button({
  children,
  url,
}: {
  children: string;
  url: string | undefined;
}) {
  const getPeople = () => {
    People(url)
      .then((response) => response.json())
      .then((body) => {
        console.log(body);
      });
  };
  return <button onClick={getPeople}>{children}</button>;
}
