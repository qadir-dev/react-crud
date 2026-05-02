import { useState } from "react";

const Edit = ({ book, onEdit, showEdit, setShowEdit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(book.id, title);
    setShowEdit(!showEdit);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input value={title} onChange={handleChange} className="outline-none bg-[whitesmoke] px-1 rounded-lg" />
      <button className="w-0">Save</button>
    </form>
  );
};

export default Edit;
