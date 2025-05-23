import {Child, Node, NodeType, Props} from "../types/node.ts";
import {nanoid} from "nanoid";

/*
* Création d'un nœud
* @param type Type du nœud
* @param props Propriétés du nœud
* @param children Nœuds enfants
* @returns Nœud 'Node'
 */
function MjsElement(
    type: NodeType,
    props?: Props,
    ...children: Child[]
): Node {

    const {id: idDom, class: classList, show = true, ...rest} = props || {};

    return {
        id: nanoid(),
        type,
        props: rest,
        idDom,
        classList: classList ? (classList as string).split(" ") : [],
        show,
        children: children.filter(child => child !== null && child !== undefined)
    }
}

/*
* Création d'éléments DOM
* @param type Type de l'élément
* @param props Propriétés de l'élément
* @param children Nœuds enfants
* @returns HTMLElement
 */
const div = (props?: Props, ...children: Child[]): Node => MjsElement("div", props, ...children);
const p = (props?: Props, ...children: Child[]): Node => MjsElement("p", props, ...children);
const h1 = (props?: Props, ...children: Child[]): Node => MjsElement("h1", props, ...children);
const h2 = (props?: Props, ...children: Child[]): Node => MjsElement("h2", props, ...children);
const button = (props?: Props, ...children: Child[]): Node => MjsElement("button", props, ...children);
const span = (props?: Props, ...children: Child[]): Node => MjsElement("span", props, ...children);

export {div, p, h1, h2, button, span}

export default MjsElement;
