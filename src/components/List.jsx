import { useContext } from "react";
import Item from "./Item";
import ListsContext from "../context/lists";

const List = () => {
  const { lists } = useContext(ListsContext);

  return (
    <div className="flex justify-start p-7 gap-5 flex-wrap">
      {lists.map((list) => {
        return <Item key={list.id} list={list} />;
      })}
    </div>
  );
};

export default List;
