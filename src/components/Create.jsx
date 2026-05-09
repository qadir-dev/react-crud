import { useState } from "react";

const Create = ({ onCreate }) => {
  const [title, setTitle] = useState();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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
