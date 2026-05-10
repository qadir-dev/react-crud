import { useState, useContext } from "react";
import ListsContext from "../context/lists";

const Create = () => {
  const [title, setTitle] = useState();
  const { handleCreate } = useContext(ListsContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreate(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center p-7 gap-7 bg-black text-[whitesmoke]"
    >
      <input
        value={title}
        onChange={handleChange}
        placeholder="Add Something"
        className="outline-none border rounded-lg p-2"
      />
      <button className="border rounded-lg p-2">Add</button>
    </form>
  );
};

export default Create;
