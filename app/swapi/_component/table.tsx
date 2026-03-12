type bodyObject = {
  name?: string;
};

export default function Table({
  headers,
  body,
}: {
  headers: (keyof bodyObject)[];
  body: Array<bodyObject>;
}) {
  if (body.length == 0 && headers.length == 0) {
    return <p>Aucune donnée</p>;
  }
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((column: string, id: number) => (
            <th key={id}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((column: bodyObject, id: number) => (
          <tr key={id}>
            {headers.map((header: keyof bodyObject, key: number) => (
              <td key={key}>{column[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
