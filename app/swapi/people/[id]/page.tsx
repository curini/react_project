import { redirect } from "next/navigation";
import { getPerson } from "../../_api/people";
import { Person } from "../../_constant/person";
import Content from "./_content";

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

  return <Content body={body} />;
}
