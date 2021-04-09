import {Point} from "./Point";

export abstract class Shape {
    protected readonly color: string;
    protected readonly filled: boolean;

    protected readonly points: Point[]

    constructor(points: Point[])
    constructor(points: Point[], color: string, filled: boolean)
    constructor(points: Point[], color: string = 'green', filled: boolean = true) {
        if (!points || points.length < 3) {
            throw Error('Should receives at least 3 points')
        }

        this.points = points;
        this.color = color;
        this.filled = filled;
    }

    abstract getType(): string;

    public toString() {
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. ` +
            `Points: ${this.points.reduce((acc, point, index, arr) => {
                if (index === arr.length - 1) {
                    return `${acc}(${point.x}, ${point.y}).`
                } else {
                    return `${acc}(${point.x}, ${point.y}), `;
                }
            }, '')}`
    }

    public getPerimeter(): number {
        let perimeter: number = 0;

        this.points.forEach((point, index, arr) => {
            if (index === arr.length - 1) {
                return perimeter += point.distance(arr[0])
            }

            return perimeter += point.distance(arr[index + 1])
        })

        return perimeter
    }
}
