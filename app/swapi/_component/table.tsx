import Link from "next/link";

type bodyObject = {
  name?: string;
  gender?: string;
  url?: string;
  id?: string;
};

export default function Table({
  headers,
  body,
}: {
  headers: (keyof bodyObject)[];
  body: Array<bodyObject>;
}) {
  if (!body || (body.length == 0 && headers.length == 0)) {
    return <p>Aucune donnée</p>;
  }

  const getPeopleId = (urlWithId: string | undefined) => {
    return urlWithId
      ? parseInt(urlWithId.replace("https://swapi.dev/api/people/", ""))
      : 0;
  };

  return (
    <table className="table w-full mb-5 mt-5">
      <thead>
        <tr className="bg-black text-white">
          {headers.map((column: string, id: number) => (
            <th key={id}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((column: bodyObject, id: number) => (
          <tr key={id} className="text-center border">
            {headers.map((header: keyof bodyObject, key: number) => (
              <td key={key}>
                {header == "name" && getPeopleId(column["url"]) ? (
                  <Link
                    className="hover:underline"
                    href={"/swapi/people/" + getPeopleId(column["url"])}
                  >
                    {column[header]}
                  </Link>
                ) : (
                  column[header]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
