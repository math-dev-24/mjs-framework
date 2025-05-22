import {Component} from "./component.ts";


export type NodeType =
    | "div" | "a" | "p" | "ul" | "li" | "img" | "h1" | "h2" | "h3" | "h4" | "span"
    | "button" | "input" | "form" | "nav" | "header" | "footer" | "main" | "section"
    | "article" | "aside" | "table" | "tr" | "td" | "th" | "thead" | "tbody";


export interface Node {
    id: string,
    type: NodeType;
    props: Props;
    idDom?: string;
    classList?: string[];
    show: boolean;
    children: Child[];
}

export interface Props {
    [key: string]: any;
}

export type Child = Component | string | number | Node | null;