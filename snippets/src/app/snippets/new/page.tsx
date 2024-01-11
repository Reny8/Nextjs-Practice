import { createSnippet } from "@/db";
export default function CreateSnippetPage() {
  async function handleClick(data: FormData) {
    "use server";
    const body = {
      title: data.get("title") as string,
      code: data.get("code") as string,
    };
    await createSnippet(body);
  }

  return (
    <div className="snippet-page">
      <form className="snippet-form" action={handleClick}>
        <div className="header">
          <h1>Create Snippet</h1>
          <a href="/">
            <button>&larr;</button>
          </a>
        </div>
        <label htmlFor="title">
          Title
          <input type="text" name="title" />
        </label>
        <label htmlFor="code">
          Code
          <textarea name="code" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
