import {div, button, p} from "../../framework/core/components.ts";
import {createSignal} from "../../framework/core/signal.ts";


const Counter = (props: {key: string}) => {

    let counter = createSignal(0);

    const incCounter = () => {
        counter.value++;
    }
    const decCounter = () => {
        counter.value = counter.value - 1;
    }
    const resetCounter = () => {
        counter.value = 0;
    }

    return div(
        {
            class: "flex items-center gap-2",
        },
        button(
            {
                class: "btn btn-success",
                onClick: incCounter
            },
            "Inc"
        ),
        p(
            {
                id: `counter-${props.key}`,
            },
            String(counter.value)
        ),
        button(
            {
                class: "btn btn-danger",
                onClick: decCounter
            },
            "Dec"
        ),
        button(
            {
                class: "btn btn-warning",
                onclick: resetCounter
            },
            "Reset"
        )
    )
}

export default Counter;