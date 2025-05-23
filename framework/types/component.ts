export type ComponentType =
    | "div" | "a" | "p" | "ul" | "li" | "img" | "h1" | "h2" | "h3" | "h4" | "span"
    | "button" | "input" | "form" | "nav" | "header" | "footer" | "main" | "section"
    | "article" | "aside" | "table" | "tr" | "td" | "th" | "thead" | "tbody"
    | "PAGE" | "LAYOUT";

export interface Props {
    [key: string]: any;
}

export type MjsComponent<T> = (props?: T) => Node;

export type Child = Node | string | number | null | undefined;

export interface Component {
    default: MjsComponent<Props>,
    metadata?: ComponentMetadata,
}

export type ComponentMetadata = {
    name: string,
    path: string,
    description?: string,
    params?: string[]
}

export interface Node {
    id: string,
    type: ComponentType,
    children: Child[];
}