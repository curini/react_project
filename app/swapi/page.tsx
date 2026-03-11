import Button from "./_component/button";

export default function Page() {
  const url = process.env.SWAPI_URL;
  return (
    <>
      <h1>Swapi</h1>
      <div>
        <Button url={url}>Recupérer les personnages</Button>
      </div>
    </>
  );
}
