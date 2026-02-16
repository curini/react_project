import type { JSX } from "react";

type Person = {
  name: string;
  imageId: string;
};

function getImageUrl(person: Person): string {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

function Profile({ person }: { person: Person }): JSX.Element {
  return <img src={getImageUrl(person)} alt={person.name} />;
}

export default function Gallery(): JSX.Element {
  const people: Person[] = [
    { name: "Katsuko Saruhashi", imageId: "YfeOqp2" },
    { name: "Aklilu Lemma", imageId: "OKS67lh" },
    { name: "Lin Lanying", imageId: "1bX5QH6" },
  ];
  return (
    <section>
      <h1>Amazing scientists</h1>
      {people.map((person) => (
        <Profile key={person.name} person={person} />
      ))}
    </section>
  );
}
