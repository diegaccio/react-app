interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseListProps {
  expenses: Expense[];
  filterSelection: string;
  onDelete: (id: number) => void;
}

const ExpenseList = ({
  expenses,
  filterSelection,
  onDelete,
}: ExpenseListProps) => {
  if (expenses.length === 0) {
    return <div>No expenses</div>;
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {expenses
          .filter((expenses) => expenses.category != filterSelection)
          .map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>€ {expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  onClick={() => onDelete(expense.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          <td>
            €{" "}
            {expenses
              .reduce((acc, expense) => acc + expense.amount, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
