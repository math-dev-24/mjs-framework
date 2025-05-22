import {Node} from "./node";

export interface ComponentMetadata {
    name: string;
    description?: string;
    debugInfo?: string;
}

export interface Component {
    default: Node,
    metadata: ComponentMetadata
}