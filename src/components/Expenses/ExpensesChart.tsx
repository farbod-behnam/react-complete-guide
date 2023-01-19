import { DataPoint } from "../../models/DataPoint.model";
import { Expense } from "../../models/expense.model";
import Chart from "../Chart/Chart";

interface Props {
    expenses: Expense[];
}

export default function ExpensesChart(props: Props) {

    const chartDataPoints: DataPoint[] = [
        new DataPoint("Jan", 0),
        new DataPoint("Feb", 0),
        new DataPoint("Mar", 0),
        new DataPoint("Apr", 0),
        new DataPoint("May", 0),
        new DataPoint("Jun", 0),
        new DataPoint("Jul", 0),
        new DataPoint("Aug", 0),
        new DataPoint("Sep", 0),
        new DataPoint("Oct", 0),
        new DataPoint("Nov", 0),
        new DataPoint("Dec", 0),
    ]

    for (let expense of props.expenses) {
        const expenseMonth: number = expense.date.getMonth(); // starting at 0 == January
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={chartDataPoints}></Chart>
    );
}