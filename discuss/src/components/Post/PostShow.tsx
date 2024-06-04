export default function PostShow({
  params,
}: {
  params: { post: { title: string; content: string } };
}) {
  return (
    <div>
      <h1>{params.post.title}</h1>
      <p>{params.post.content}</p>
    </div>
  );
}
