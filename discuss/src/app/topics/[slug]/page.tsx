export default function TopicShowPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="page">
      <h1>{params.slug}</h1>
    </div>
  );
}
