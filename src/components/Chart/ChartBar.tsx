import "./ChartBar.css";

interface Props {
    value: number;
    maxValue: number;
    label: string;
}

export default function ChartBar(props: Props) {

    let barFillHeight = "0%";

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__lable">{props.label}</div>
        </div>
    );
}