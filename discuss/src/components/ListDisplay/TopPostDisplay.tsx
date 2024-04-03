export default function TopPostDisplay({ title }: { title?: string | null }) {
  return (
    <div className="col-span-3 card">
      <h1 className="text-xl m-2">
        {title !== undefined ? title : "Top Posts"}
      </h1>
    </div>
  );
}
