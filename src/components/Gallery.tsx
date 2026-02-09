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
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }} />
      <Profile person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }} />
      <Profile person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} />
    </section>
  );
}
