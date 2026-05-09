import Item from "./Item";

const List = ({ lists, onEdit, onDelete }) => {
  return (
    <div className="flex justify-start p-7 gap-5 flex-wrap">
      {lists.map((list) => {
        return (
          <Item key={list.id} list={list} onEdit={onEdit} onDelete={onDelete} />
        );
      })}
    </div>
  );
};

export default List;
