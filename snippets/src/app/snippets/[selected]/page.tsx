import { deleteSnippet, getSnippetById, updateSnippet } from "@/db";
import SnippetActions from "@/components/SnippetActions";
import { notFound } from "next/navigation";
export default async function SelectedSnippetPage({
  params,
}: {
  params: { selected: string };
}) {
  const snip = await getSnippetById(parseInt(params.selected));
  async function handleDeleteClick(id: number) {
    "use server";
    await deleteSnippet(id);
  }
  async function handleEditClick(
    id: number,
    data: { title: string; code: string }
  ) {
    "use server";
    await updateSnippet(id, data);
  }
  if (!snip) {
    return notFound()
  }
  return (
    <div className="selected-page">
        <SnippetActions
          snip={snip}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={handleEditClick}
        />
    </div>
  );
}
