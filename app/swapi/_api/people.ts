export function getPeople(
  url: string | undefined,
  page?: number,
): Promise<Response> {
  return fetch(`${url}people?page=${page}`);
}

export function getPerson(url: string, id: number): Promise<Response> {
  return fetch(`${url}people/${id}`);
}
