export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;
  return <div>Page du personnage {param.id}</div>;
}
