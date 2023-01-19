import { FormEvent } from "react";
import "./ExpensesFilter.css";

interface Props {
    selectedYear: string;
    onSelectYear: (year: string) => void;
}

export default function ExpensesFilter(props: Props) {

    const selectYearHandler = (event: FormEvent<HTMLSelectElement>): void => {
        props.onSelectYear(event.currentTarget.value);
    } 

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by Year</label>
                <select defaultValue={props.selectedYear} onChange={selectYearHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}