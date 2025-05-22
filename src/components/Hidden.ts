import {createElement} from "../../framework/core/components.ts";
import {ComponentMetadata} from "../../framework/types/component.ts";

const Hidden = createElement.h2(
    {show: false},
    "Ceci est un composant caché"
)

export const metadata: ComponentMetadata  = {
    name: "Composant caché",
    description: "Composant de salutation"
}

export default Hidden;