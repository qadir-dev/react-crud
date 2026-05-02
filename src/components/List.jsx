import Item from "./Item";

const List = ({ books, onDelete,onEdit }) => {
  return (
    <div className="m-7 flex flex-wrap flex-start gap-5">
      {books.map((book) => {
        return (
          <Item
            key={book.id}
            book={book}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
};

export default List;
