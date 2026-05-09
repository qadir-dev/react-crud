import { useState } from "react";
import Create from "./components/Create";
import List from "./components/List";

const App = () => {
  const [lists, setLists] = useState([]);

  //create
  const handleCreate = (title) => {
    const updatedList = [...lists, { id: lists.length + 1, title }];
    setLists(updatedList);
  };

  //read

  //update
  const handleEdit = (id, newTitle) => {
    const updatedList = lists.map((list) => {
      if (list.id === id) {
        return { ...list, title: newTitle };
      }
      return list;
    });
    setLists(updatedList);
  };

  //delete
  const handleDelete = (id) => {
    const updatedList = lists.filter((list) => {
      return list.id !== id;
    });
    setLists(updatedList);
  };

  return (
    <div className="flex flex-col">
      <Create onCreate={handleCreate} />
      <List lists={lists} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
