export class DataPoint {
    value!: number;
    label!: string;

    constructor(label: string, value: number) {
        this.value = value;
        this.label = label;
    }
}
