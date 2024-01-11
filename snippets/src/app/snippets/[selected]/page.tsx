import { deleteSnippet, getSnippetById, updateSnippet } from "@/db";
import SnippetActions from "@/components/SnippetActions";
export default async function SelectedSnippetPage({
  params,
}: {
  params: { selected: string };
}) {
  const snip = await getSnippetById(parseInt(params.selected));

  async function handleDeleteClick(id: number) {
    'use server'
    await deleteSnippet(id);
  }
  return (
    <div className="selected-page">
      <div className="selected-nav">
        <h1>{snip?.title || "Not Found"}</h1>
        <SnippetActions 
            snip={snip} 
            handleDeleteClick={handleDeleteClick}/>
      </div>
      <div className="code-display">
        <code>{snip?.code || "Not Found"}</code>
      </div>
    </div>
  );
}
