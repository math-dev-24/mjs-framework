import { h1, div, button } from "../../framework/core/components.ts";


interface HelloProps {
    name?: string;
    color?: string;
}

const Hello = (props: HelloProps) => {

    const text: string = `Hello ${props.name || "World"}`;

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
        console.error(text);
        alert(text);
    }

    return div(
        {},
        h1(
            {
                id: "hello-world",
                class: "flex flex-col items-center",
                onMouseOver: changeColor
            },
            text
        ),
        button(
            {
                class:"btn btn-primary",
                onClick: handleClick
            },
            "Click me"
        )
    )
}

export default Hello;