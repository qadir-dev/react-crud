import { useEffect, useContext } from "react";
import Create from "./components/Create";
import List from "./components/List";
import ListsContext from "./context/lists";

const App = () => {
  const { handleRead } = useContext(ListsContext);

  useEffect(() => {
    handleRead();
  }, []);

  return (
    <div className="flex flex-col">
      <Create />
      <List />
    </div>
  );
};

export default App;
