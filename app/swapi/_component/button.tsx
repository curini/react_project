"use client";

import People from "@/app/swapi/_api/people";
import Table from "./table";
import { useState } from "react";

type ResponsePeople = {
  count: number;
  next: string;
  results: Array<{ name: string }>;
};

export default function Button({
  children,
  url,
}: {
  children: string;
  url: string | undefined;
}) {
  const [people, setPeople] = useState([{}]);
  const getPeople = () => {
    People(url)
      .then((response: Response) => response.json())
      .then((body: ResponsePeople) => {
        setPeople(body.results);
      });
  };

  return (
    <section>
      <button
        className="border border-black px-2 py-2 hover:bg-black hover:text-white cursor-pointer"
        onClick={getPeople}
      >
        {children}
      </button>
      <Table body={people} headers={["name"]}></Table>
    </section>
  );
}
