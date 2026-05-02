import { useState } from "react";
import Create from "./components/Create";
import List from "./components/List";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreate = (title) => {
    const UpdatedBook = [...books, { id: Math.random() * 9999, title }];
    setBooks(UpdatedBook);
  };

  const handleDelete = (id) => {
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  };

  const handleEdit = (id, newTitle) => {
    const updatedBook = books.map((book) => {
      if (book.id === id) return { ...book, title: newTitle };
      return book;
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
