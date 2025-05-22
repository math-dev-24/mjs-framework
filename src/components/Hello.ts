import {createElement} from "../../framework/core/components.ts";
import { ComponentMetadata } from "../../framework/types/component.ts";

const changeColor = () => {
    const el = document.getElementById("hello-world");
    if (el) {
        const tmp_color = el.style.color;
        switch (tmp_color) {
            case "red":
                el.style.color = "blue";
                break;
            case "blue":
                el.style.color = "green";
                break;
            case "green":
                el.style.color = "red";
                break;
            default:
                el.style.color = "red";
                break;
        }
    }
}

const handleClick = () => {
    console.error("Hello World");
    alert("Hello World")
}


const Hello = createElement.h1(
    {
        id: "hello-world",
        onClick: handleClick,
        onMouseEnter: changeColor,
    },
    "Hello World"
)

export const metadata: ComponentMetadata = {
    name: "Hello",
    description: "Composant de salutation"
}

export default Hello;