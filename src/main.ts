import {ComponentMetadata} from "../framework/types/component.ts";
import MjsElement from "../framework/core/components.ts"


export const metadata: ComponentMetadata = {
    name: "main",
    description: "main"
}


const Hello = await import("./components/Hello.ts") ;
const Counter = await import("./components/Counter.ts") ;


const Home = MjsElement(
    'div',
    {
        id: "home",
        class: "flex flex-col gap-2"
    },
    Hello.default(
        {name: "Mathieu", color: "red"})
    ,
    Counter.default()
)


export default Home;