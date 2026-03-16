import Title from "@/app/_component/title";
import PeopleView from "./_component/people-view";

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const url = process.env.SWAPI_URL || "https://swapi.dev/api/";
  return (
    <>
      <Title>Swapi</Title>
      <PeopleView
        url={url}
        searchParams={searchParams}
        route={"/swapi"}
      ></PeopleView>
    </>
  );
}
