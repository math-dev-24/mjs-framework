import createElement from "../framework/core/components.ts"
import {ComponentMetadata} from "../framework/types/component.ts";


const Hello = await import("./components/Hello.ts") ;
const Counter = await import("./components/Counter.ts") ;


const Home = createElement(
    "PAGE",
    {
        id: "home",
        class: "flex flex-col gap-2"
    },
    Hello.default(
        {name: "Mathieu", color: "red"})
    ,
    Counter.default({key: "1"}),
)

export const metadata: ComponentMetadata  = {
    name: "Home",
    path: "/"
}

export default Home;