import { DataPoint } from "../../models/DataPoint.model";
import ChartBar from "./ChartBar";
import "./Chart.css";

interface Props {
    dataPoints: DataPoint[];
}

export default function Chart(props: Props) {

    const dataPointsValues: number[] = props.dataPoints.map(dataPoint => dataPoint.value);
    const maximumNumber: number = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maximumNumber}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}