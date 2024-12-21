import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { removeExpenseAsync } from "../state/expenseTracker/ExpenseSlice";

const ExpenseList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { expenses, selectedCategory } = useSelector(
    (state: RootState) => state.expenses
  );

  const filteredExpenses =
    selectedCategory === ""
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  if (filteredExpenses.length === 0) return <p>No expenses found.</p>;

  return (
    <table className="table table-bordered table-hover  mt-3 text-center ">
      <thead className="table-light">
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filteredExpenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => dispatch(removeExpenseAsync(expense.id))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {filteredExpenses
              .reduce((acc, expense) => expense.amount + acc, 0)
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
