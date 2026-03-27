import { Person, attributeToShow, cleanProperty } from "../../_constant/person";

export default function Content({ body }: { body: Person }) {
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
