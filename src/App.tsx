import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import { useState } from "react";
import { produce } from "immer";

function App() {
  let items = ["Cippa", "Lippa", "Zippa", "Pippa"];

  const [showAlert, setShowAlert] = useState(false);

  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);

  const onFixBug = () => {
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draftBugs) => {
        const bug = draftBugs.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <>
      <div>
        {bugs.map((bug) => (
          <div key={bug.id}>
            <span>{bug.title} </span>
            <span>{bug.fixed ? "Fixed" : "Not Fixed"}</span>
          </div>
        ))}
        <Button onClick={onFixBug} color="primary">
          Fix Bug
        </Button>
      </div>
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
      <Like onClick={() => console.log("Like Clicked")} />
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
