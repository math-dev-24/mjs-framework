import {Child, Component, Props} from "../types/component.ts";


class MjsFramework {
    /**
     * Convertit un Node en élément DOM réel
     * @param node Nœud à convertir
     * @returns HTMLElement | Text | null
     */
    createDOMElement(
        node: Child
    ): HTMLElement | Text | null
    {
        // Cas texte ou nombre
        if (typeof node === "string" || typeof node === "number") {
            return document.createTextNode(String(node));
        }

        // Si vide
        if (!node || typeof node !== "object") {
            return null;
        }

        const element = document.createElement(node.type);

        this.setProps(element, node.props);

        if(node.children){
            node.children.forEach(child => {
                const domElement = this.createDOMElement(child);
                if (domElement) {
                    element.appendChild(domElement);
                }
            });
        }

        return element;
    }

    /**
     * Applique les propriétés à un élément DOM
     * @param element Element DOM
     * @param props Propriétés à appliquer
     */
    setProps(element: HTMLElement, props: Props): void {
        if (!props) {
            return;
        }
        Object.keys(props).forEach(key => {
            const value = props[key];

            // Gestion des événements
            const event = key.slice(0,2).toLowerCase();
            if (event == "on" && typeof value === "function") {
                const eventType = key.slice(2).toLowerCase();
                element.addEventListener(eventType, value);
                return;
            }

            // Gestion du style
            if (key === 'style' && typeof value === 'object') {
                Object.assign(element.style, value);
                return;
            }

            // Set d'autre attribut
            if (value !== null && value !== undefined) {
                element.setAttribute(key, String(value));
            }
        });
    }

    /**
     * Rendu simple sans composant
     * @param node Nœud à rendre
     * @param container Conteneur dans lequel le rendu sera effectué string | HTMLElement
     */
    render(node: Component, container: HTMLElement | string): void {

        const containerElement = typeof container === "string"
            ? document.querySelector(container) as HTMLElement
            : container;

        if (!containerElement) {
            throw new Error("Container element not found");
        }

        containerElement.innerHTML = "";

        const domElement = this.createDOMElement(node.default);

        if (domElement) {
            containerElement.appendChild(domElement);
        }
    }

}

export default MjsFramework;