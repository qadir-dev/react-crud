import { useState } from "react";
import Edit from "./Edit";

const Item = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditToggle = () => {
    setShowEdit(!showEdit);
  };
  const content = showEdit ? (
    <Edit
      book={book}
      onEdit={onEdit}
      showEdit={showEdit}
      setShowEdit={setShowEdit}
    />
  ) : (
    <h3 className="inline-50 wrap-break-word">{book.title}</h3>
  );
  return (
    <div className="flex justify-between bg-[wheat] w-70 h-auto p-2 rounded-lg border border-white shadow-sm shadow-gray-500">
      <div className="flex flex-col p-1">
        <div>{content}</div>
        <div>{!showEdit && (
          <button onClick={handleEditToggle} className="w-0">
            Edit
          </button>
        )}</div>
      </div>
      <div>
        <button onClick={() => onDelete(book.id)}>X</button>
      </div>
    </div>
  );
};

export default Item;
