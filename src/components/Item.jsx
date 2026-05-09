import { useState } from "react";
import Edit from "./Edit";

const Item = ({ list, onEdit, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="flex flex-col relative w-70 rounded-lg gap-5 bg-black text-[whitesmoke] p-5">
      {!showEdit ? (
        <>
          <div className="flex justify-between">
            <h2 className="wrap-break-word w-50">{list.title}</h2>
            <button
              onClick={() => onDelete(list.id)}
              className="absolute rounded-lg top-0 right-1 "
            >
              &times;
            </button>
          </div>
          <button
            onClick={() => setShowEdit(!showEdit)}
            className="border rounded-lg p-1 w-min"
          >
            Edit
          </button>
        </>
      ) : (
        <Edit
          list={list}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          onEdit={onEdit}
        />
      )}
    </div>
  );
};

export default Item;
