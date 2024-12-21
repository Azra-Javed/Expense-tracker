import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../state/expenseTracker/ExpenseSlice";

const ExpenseFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <select className="form-select" onChange={handleChange}>
      <option value="">All categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
