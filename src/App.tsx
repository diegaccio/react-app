import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Cippa", "Lippa", "Zippa", "Pippa"];
  return (
    <>
      <ListGroup
        items={items}
        heading={"List Group"}
        onSelectItem={function (item: string): void {
          console.log(item);
        }}
      />
    </>
  );
}

export default App;
