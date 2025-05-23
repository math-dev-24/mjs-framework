import {nanoid} from "nanoid";
import {Component, ComponentType, Props, Child} from "../types/component.ts";

/*
* Création d'un nœud
* @param type Type du nœud
* @param props Propriétés du nœud
* @param children Nœuds enfants
* @returns Nœud 'Node'
 */
function createElement(
    type: ComponentType,
    props?: Props,
    ...children: Child[]
): Component {
    return {
        id: nanoid(),
        type,
        props: props || {},
        children
    }
}

/*
* Création d'éléments DOM
* @param type Type de l'élément
* @param props Propriétés de l'élément
* @param children Nœuds enfants
* @returns HTMLElement
 */
const div = (props?: Props, ...children: Child[]): Component => createElement("div", props, ...children);
const p = (props?: Props, ...children: Child[]): Component => createElement("p", props, ...children);
const h1 = (props?: Props, ...children: Child[]): Component => createElement("h1", props, ...children);
const h2 = (props?: Props, ...children: Child[]): Component => createElement("h2", props, ...children);
const button = (props?: Props, ...children: Child[]): Component => createElement("button", props, ...children);
const span = (props?: Props, ...children: Child[]): Component => createElement("span", props, ...children);

export {div, p, h1, h2, button, span}
export default createElement;
