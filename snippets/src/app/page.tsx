import { getAllSnippets } from "@/db";
export default async function Home() {
  const snippets = (await getAllSnippets()) || [];
  return (
    <div className="home-page">
      <div className="snippet-nav">
        <h1>JavaScript Snippets</h1>

        <a href="/snippets/new">
          <button>New</button>
        </a>
      </div>
      <div className="around-list">
        <ul className="snippets-list">
          {snippets.map((snippet) => (
            <li key={snippet.id}>
              <h2>{snippet.title}</h2>
              <a href={`/snippets/${snippet.id}`}>
                <button>View</button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
