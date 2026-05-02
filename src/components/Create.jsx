import { useState } from "react";

const Create = ({ onCreate }) => {
  const [title, setTitle] = useState();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) {
      onCreate(title);
      setTitle("");
    }
  };
  return (
    <div className="bg-[wheat] w-full shadow-gray-500 shadow-sm">
      <form onSubmit={handleSubmit} className="flex justify-center gap-4 p-4">
        <input
          value={title}
          onChange={handleChange}
          className="outline-0 p-2 border border-black rounded-lg"
        />
        <button className="p-2 border border-black rounded-lg">Add</button>
      </form>
    </div>
  );
};

export default Create;
