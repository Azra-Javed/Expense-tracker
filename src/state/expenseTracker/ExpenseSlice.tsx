import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseState {
  expenses: Expense[];
  selectedCategory: string;
}

const initialState: ExpenseState = {
  expenses: [
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 100,
      category: "Utilities",
    },
    { id: 3, description: "Movie", amount: 15, category: "Entertainment" },
    { id: 4, description: "Bread", amount: 3, category: "Groceries" },
  ],
  selectedCategory: "", // Default to all categories
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action: PayloadAction<number>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      removeExpenseAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.expenses = state.expenses.filter(
          (expense) => expense.id !== action.payload
        );
      }
    );
  },
});

export const removeExpenseAsync = createAsyncThunk(
  "expenses/addExpenseAsync",
  async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return id;
  }
);

export const { setCategory, addExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
