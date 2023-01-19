import { FormEvent, useState } from "react";
import { Expense } from "../../models/expense.model";
import "./ExpenseForm.css";
import "./NewExpense.css";

interface Props {
    onSaveExpenseData: (enteredExpenseData: Expense) => void;
    onCancelExpenseForm: (isCanceled: boolean) => void;
}

export default function ExpenseForm(props: Props) {

    const [enteredTitle, setEnteredTitle] = useState<string>("");
    const [enteredAmount, setEnteredAmount] = useState<number>(0);
    const [enteredDate, setEnteredDate] = useState<Date>(new Date(""));

    const titleChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredTitle(event.currentTarget.value);
        console.log(enteredTitle);
    };

    const amountChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredAmount(parseFloat(event.currentTarget.value));
        console.log(enteredAmount);
    };

    const dateChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredDate(new Date(event.currentTarget.value));


        console.log(formatDate(enteredDate));
    };

    const formatDate = (date: Date): string => {

        const month: string = date.toLocaleString("en-US", { month: "2-digit" });
        const day: string = date.toLocaleDateString("en-US", { day: "2-digit" });
        const year: number = date.getFullYear();

        return year + "-" + month + "-" + day;
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const expenseData: Expense = new Expense(Math.random().toString(), enteredTitle, enteredAmount, enteredDate);

        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount(0.0);
        setEnteredDate(new Date(""));
    };

    const cancelExpenseFormHandler = () => {
        props.onCancelExpenseForm(true);
    };



    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    {/* <input type="date" value={moment(enteredDate).format("YYYY-MM-DD")} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} /> */}
                    <input type="date" value={formatDate(enteredDate)} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
                </div>

            </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={cancelExpenseFormHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
        </form>
    );

};