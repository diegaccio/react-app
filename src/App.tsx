import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Cippa", "Lippa", "Zippa", "Pippa"];

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          Alert <span>Text</span>
        </Alert>
      )}
      <Button
        onClick={function (): void {
          console.log("Button clicked");
          setShowAlert(!showAlert);
        }}
        color="danger"
      >
        Text Button
      </Button>
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
