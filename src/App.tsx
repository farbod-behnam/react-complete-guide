import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { Expense } from "./models/expense.model";

function App() {

  const initialExpenses = [
    new Expense('e1', 'Toilet Paper', 94.12, new Date(2020, 7, 14)),
    new Expense('e3', 'Car Insurance', 294.67, new Date(2021, 2, 28)),
    new Expense('e4', 'New Desk (Wooden)', 450, new Date(2021, 5, 12)),
  ];

  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);

  const addExpenseHandler = (expense: Expense): void => {

    // not correct
    // setExpenses([expense, ...initialExpenses]);

    // not correct
    // initialExpenses.push(expense);
    // setExpenses(initialExpenses);

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  };

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
