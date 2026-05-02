import { useEffect, useState } from "react";
import Create from "./components/Create";
import List from "./components/List";

const App = () => {
  const [books, setBooks] = useState([]);

  //create
  const handleCreate = async (title) => {
    const res = await fetch("http://localhost:3001/books", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const UpdatedBook = [...books, res.data];
    setBooks(UpdatedBook);
  };

  //read
  const fetchBooks = async () => {
    const res = await fetch("http://localhost:3001/books");
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  //update
  const handleEdit = async (id, newTitle) => {
    const res = await fetch(`http://localhost:3001/books/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title: newTitle }),
    });
    const updatedBook = books.map((book) => {
      if (book.id === id) return { ...book, ...res.data };
      return book;
    });
    setBooks(updatedBook);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/books/${id}`, {
      method: "DELETE",
    });
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  };

  return (
    <div className="flex flex-col flex-wrap">
      <Create onCreate={handleCreate} />
      <List books={books} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
