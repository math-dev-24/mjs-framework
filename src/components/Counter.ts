import {createElement} from "../../framework/core/components.ts";


const Counter = (props: any) => {

    let counter = 0;

    const incCounter = () => {
        counter++;
        console.log(counter)
    }

    const decCounter = () => {
        counter--;
    }


    return createElement.div(
        {
            class: "flex flex-col items-center gap-2",
        },
        createElement.button(
            {
                class: "btn btn-success",
                onClick: incCounter
            },
            "Inc"
        ),
        counter
    )
}

export default Counter;