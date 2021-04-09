import { Shape } from './Shape';
import {Point} from "./Point";

export class Triangle extends Shape {
    constructor(points: Point[])
    constructor(points: Point[], color: string, filled: boolean)
    constructor(points: Point[], color?: string, filled?: boolean) {
        super(points, color, filled)
    }


    public toString(): string {
        return `"Triangle ${this.points.map((point, index, arr) => {
            const vertexNumber = index + 1
            if (index === arr.length - 1) {
                return `v${vertexNumber}(${point.x}, ${point.y})`
            } else {
                return `v${vertexNumber}(${point.x}, ${point.y}),`

            }
        })}"`
    }

    public getType(): string {
        console.log(this.points);

        const ok = this.points.map((point, index, arr) => {
            if (index === arr.length - 1) {
                return point.distance(arr[0])
            }

            return point.distance(arr[index + 1])
        })

        console.log(ok);

        return "";
    }
}
