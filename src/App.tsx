import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import { useState } from "react";
import { produce } from "immer";
import FormWithHook from "./components/FormWithHook";
import ExpenseList from "./expense-traker/components/ExpenseList";
import ExpenseFilter from "./expense-traker/components/ExpenseFilter";
import ExpenseForm from "./expense-traker/components/ExpenseForm";
import UserList from "./components/UserList";

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

  const onDelete = (id: number) => {
    console.log("Delete", id);
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Expense 1", amount: 100, category: "Utilities" },
    { id: 2, description: "Expense 2", amount: 100, category: "Utilities" },
    { id: 3, description: "Expense 3", amount: 100, category: "Groceries" },
    { id: 4, description: "Expense 4", amount: 100, category: "Groceries" },
  ]);

  const [filterSelection, setFilterSelection] = useState("");

  const onFilterChange = (filter: string) => {
    setFilterSelection(filter);
  };

  const filteredExpenses =
    filterSelection != ""
      ? expenses.filter((expenses) => expenses.category === filterSelection)
      : expenses;

  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="mb-5">
        <ExpenseForm
          onAddExpense={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses[expenses.length - 1].id + 1 },
            ])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter onFilterChange={onFilterChange} />
      </div>

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={onDelete}
      ></ExpenseList>

      <h1>User List</h1>
      <UserList></UserList>
      <div className="invisible">
        <FormWithHook />
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
        <ExpandableText maxLength={5}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ex et
          voluptatibus laudantium excepturi fugit necessitatibus similique
          officiis, beatae atque ad illo blanditiis dignissimos omnis minus.
          Consectetur saepe sed debitis delectus aut rerum odit dignissimos
          libero id quam optio quis fugiat repellendus, sint soluta natus cum
          repellat? Repudiandae quo quod reiciendis fugiat omnis blanditiis
          illo, at inventore, aliquid quae corrupti. Dolores, ea! Eveniet
          necessitatibus quibusdam quia voluptatum ad quos totam ipsum laborum
          in sequi architecto, cum porro pariatur magni similique vel assumenda
          ratione doloribus nostrum delectus perspiciatis vero aperiam. Pariatur
          accusantium dolor qui, expedita obcaecati dolores porro velit iusto
          vel!
        </ExpandableText>
      </div>
    </>
  );
}

export default App;
