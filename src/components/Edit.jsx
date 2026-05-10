import { useContext, useState } from "react";
import ListsContext from "../context/lists";

const Edit = ({ list, showEdit, setShowEdit }) => {
  const [title, setTitle] = useState(list.title);
  const { handleEdit } = useContext(ListsContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEdit(list.id, title);
    setShowEdit(!showEdit);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input value={title} onChange={handleChange} />
      <button type="submit" className="border rounded-lg p-1 w-min">
        Save
      </button>
    </form>
  );
};

export default Edit;
