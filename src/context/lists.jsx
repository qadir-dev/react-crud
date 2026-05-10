import { createContext, useState } from "react";

const ListsContext = createContext();

const ListsProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  //create
  const handleCreate = async (title) => {
    const res = await fetch("http://localhost:3001/lists", {
      method: "POST",
      body: JSON.stringify({ title }),
    });

    const updatedList = [...lists, res.data];
    setLists(updatedList);
  };

  //read
  const handleRead = async () => {
    const res = await fetch("http://localhost:3001/lists");
    const data = await res.json();
    setLists(data);
  };

  //update
  const handleEdit = async (id, newTitle) => {
    const res = await fetch(`http://localhost:3001/lists/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title: newTitle }),
    });

    const updatedList = lists.map((list) => {
      if (list.id === id) {
        return { ...list, title: newTitle };
      }
      return list;
    });
    setLists(updatedList);
  };

  //delete
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/lists/${id}`, {
      method: "DELETE",
    });

    const updatedList = lists.filter((list) => {
      return list.id !== id;
    });
    setLists(updatedList);
  };

  const value = {
    lists,
    handleCreate,
    handleRead,
    handleEdit,
    handleDelete,
  };
  return (
    <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
  );
};

export default ListsContext;
export { ListsProvider };
