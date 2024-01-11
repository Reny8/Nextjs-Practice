"use client";

interface Snippet {
  id: number;
  title: string;
  code: string;
}

export default function SnippetActions(props: {
  snip: Snippet | undefined | null;
  handleDeleteClick: (id: number) => void;
}) {
  return (
    <div className="actions-box">
      <button>Edit</button>
      <button onClick={() => props.handleDeleteClick(props.snip?.id || 0)}>
        Delete
      </button>
    </div>
  );
}
