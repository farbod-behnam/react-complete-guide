import { useState } from "react";
import { Expense } from "../../models/expense.model";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props: {onAddExpense: (expense: Expense) => void}) {

    const [isExpenseFormShown, setIsExpenseFormShown] = useState<boolean>(false);

    const saveExpenseDataHandler = (enteredExpenseData: Expense):void => {
        const expenseData = {...enteredExpenseData};
        console.log(expenseData);

        props.onAddExpense(expenseData);
        setIsExpenseFormShown(false);
    };

    const showExpenseFormHandler = () => {
        setIsExpenseFormShown(true);
    };

    const hideExpenseFormHandler = (isHidden: boolean) => {
        setIsExpenseFormShown(false);
    };


    return (
        <div className="new-expense">
            {isExpenseFormShown === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseForm={hideExpenseFormHandler}></ExpenseForm>}
            {isExpenseFormShown === false && <button onClick={showExpenseFormHandler}>Add New Expense</button>}
        </div>
    );
};