import { redirect } from "next/navigation";
import { getPerson } from "../../_api/people";
import { Person, attributeToShow, cleanProperty } from "../../_constant/person";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const url = process.env.SWAPI_URL || "https://swapi.dev/api/";
  const param = await params;
  const id = parseInt(param.id);

  if (isNaN(id) || "" + id !== param.id) {
    redirect(`/error`);
  }

  const response = await getPerson(url, id);
  const body: Person = await response.json();

  return body.name ? (
    <div>
      <h1 className="text-2xl mb-4">
        Page du personnage{" "}
        <strong className="underline inline-block h-4 rounded">
          {body.name}
        </strong>
      </h1>
      <ul>
        {attributeToShow.map((value: keyof Person) => (
          <li className="mt-2" key={value}>
            <strong>{cleanProperty(value)}:</strong>
            <span className="inline-block h-4 rounded">{body[value]}</span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Pas de donnée</div>
  );
}
