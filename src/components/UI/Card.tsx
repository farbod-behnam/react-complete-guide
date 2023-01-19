import { ReactNode } from "react";
import "./Card.css" 

export default function Card(props: {children: ReactNode, className: string}) {
    const classes = "card " + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}