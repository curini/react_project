export default function People(
  url: string | undefined,
  page?: number,
): Promise<Response> {
  return fetch(`${url}people?page=${page}`);
}
