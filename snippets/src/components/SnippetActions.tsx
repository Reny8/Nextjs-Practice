"use client";

import { useState } from "react";

interface Snippet {
  id: number;
  title: string;
  code: string;
}
interface SnippetActionsProps {
  snip: Snippet
  handleDeleteClick: (id: number) => void;
  handleEditClick: (id: number, data: { title: string; code: string }) => void;
}

export default function SnippetActions(props: SnippetActionsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedFields, setEditedFields] = useState({
    title: props.snip.title,
    code: props.snip.code,
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    props.handleEditClick(props.snip?.id || 0, editedFields);
    setIsEditing(false);
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  return (
    <>
      <div className="selected-nav">
        {!isEditing ? (
          <h1>{editedFields.title}</h1>
        ) : (
          <input
            type="text"
            name="title"
            value={editedFields.title}
            onChange={handleInputChange}
          />
        )}
        <div className="actions-box">
          {isEditing ? (
            <>
              <button onClick={handleEditToggle} className="cancel">Cancel</button>
              <button onClick={handleSaveClick} className="save">Save</button>
            </>
          ) : (
            <>
              <a href="/">
                <button className="back">Back</button>
              </a>
              <button onClick={handleEditToggle} className="edit">Edit</button>
              <button className="delete"
                onClick={() => props.handleDeleteClick(props.snip.id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
      <div className="code-display">
        {!isEditing ? (
          <code>{editedFields.code}</code>
        ) : (
          <textarea
            className="code"
            name="code"
            value={editedFields.code}
            onChange={handleInputChange}
          ></textarea>
        )}
      </div>
    </>
  );
}
