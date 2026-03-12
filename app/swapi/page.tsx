import Button from "@/app/swapi/_component/button";
import Title from "@/app/_component/title";

export default function Page() {
  const url = process.env.SWAPI_URL;
  return (
    <>
      <Title>Swapi</Title>
      <Button url={url}>Recupérer les personnages</Button>{" "}
    </>
  );
}
