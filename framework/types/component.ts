import {Node} from "./node";

export type ComponentFunction<T = any> = (props?: T) => Node;

export interface Component {
    default: ComponentFunction,
    metadata?: {
        router: string,
        name: string,
        description: string,
        params: string[]
    }
}