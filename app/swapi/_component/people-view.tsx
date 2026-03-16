import Table from "./table";
import Pagination from "./pagination";
import { getPeople } from "@/app/swapi/_api/people";
import Button from "./button";

type ResponsePeople = {
  count: number;
  next: string;
  results: Array<{ name: string }>;
};

export default async function PeopleView({
  url,
  searchParams,
  route,
}: {
  url: string | undefined;
  searchParams: Promise<{ page?: string }>;
  route: string;
}) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const response = await getPeople(url, page);
  const body: ResponsePeople = await response.json();
  const people = body.results;
  const limitResult = 10;
  const maxPage = Math.ceil(body?.count / limitResult);

  return (
    <>
      <Button>Action</Button>
      <Table body={people} headers={["name", "gender", "url"]}></Table>
      <Pagination currentPage={page} maxPage={maxPage} url={route}></Pagination>
    </>
  );
}
