import { useState } from "react";

import { Expense } from "../../models/expense.model";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css"
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props: { expenses: Expense[] }) {

    const [filteredYear, setFilteredYear] = useState<string>("2020");

    const handleSelectedYear = (selectedYear: string): void => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    const filteredExpenses: Expense[] = props.expenses.filter(expense => (expense.date.getFullYear().toString() === filteredYear));



    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onSelectYear={handleSelectedYear} selectedYear={filteredYear}></ExpenseFilter>
                {/* this is totaly correct */}
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))} */}
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList expenses={filteredExpenses}></ExpensesList>
            </Card>
        </div>
    );
}