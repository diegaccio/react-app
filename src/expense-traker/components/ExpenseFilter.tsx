import ExpenseCategories from "../ExpenseCategories";

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
      {ExpenseCategories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
