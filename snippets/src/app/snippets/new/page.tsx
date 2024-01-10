export default function CreateSnippetPage() {
  return (
    <div className="snippet-page">
      <form className="snippet-form">
        <h1>Create Snippet</h1>
        <label>
          Title
          <input type="text" name="title" />
        </label>
        <label>
          Code
          <textarea name="code"/>
        </label>
        <button>Save</button>
      </form>
    </div>
  );
}
