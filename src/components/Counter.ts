import {div, button, p} from "../../framework/core/components.ts";
import { useSignal } from "../../framework/core/signal.ts";


const Counter = (props: {key: string}) => {

    let [counter, setCounter] = useSignal(0)

    const incCounter = () => {
        setCounter(1);
    }
    const decCounter = () => {
        setCounter(1);
    }
    const resetCounter = () => {
        setCounter(0);
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
            counter
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