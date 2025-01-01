interface ExpenseFilterProps {
  onFilterChange: (filter: string) => void;
}

const ExpenseFilter = ({ onFilterChange }: ExpenseFilterProps) => {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(e) => onFilterChange(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Category 1">Category 1</option>
      <option value="Category 2">Category 2</option>
    </select>
  );
};

export default ExpenseFilter;
