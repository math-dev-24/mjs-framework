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
const createElement = {
    div: (props?: Props, ...children: Child[]) => MjsElement("div", props, ...children),
    p: (props?: Props, ...children: Child[]) => MjsElement("p", props, ...children),
    h1: (props?: Props, ...children: Child[]) => MjsElement("h1", props, ...children),
    h2: (props?: Props, ...children: Child[]) => MjsElement("h2", props, ...children),
    button: (props?: Props, ...children: Child[]) => MjsElement("button", props, ...children),
    span: (props?: Props, ...children: Child[]) => MjsElement("span", props, ...children),
};

export {createElement};
export default MjsElement;
