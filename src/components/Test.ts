import {createElement} from "../../framework/core/components.ts";
import {ComponentMetadata} from "../../framework/types/component.ts";

const handleClick = () => {
    alert("Mjs Framework")
}

const Test = createElement.div(
    {
        idDom: "test",
        class: "flex flex-col items-center"
    },
    "Ceci est un test",
    createElement.button(
        {
            onClick: handleClick
        },
        "Click me"
    )
)

export const metadata: ComponentMetadata  = {
    name: "Test",
    description: "Test"
}

export default Test;