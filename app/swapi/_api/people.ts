export default function People(url: string | undefined): Promise<Response> {
  return fetch(`${url}people`);
}
