import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3 mb-5  animated-text text-center display-5 fw-bold animated-vibrant-text">
        Expense Tracker
      </h1>
      <div className="d-flex flex-column gap-4">
        <div className="mb-5">
          <ExpenseForm />
        </div>
        <div className="my-5 expenseList">
          <ExpenseFilter />
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default App;
