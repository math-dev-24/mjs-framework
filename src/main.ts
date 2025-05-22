import {ComponentMetadata} from "../framework/types/component.ts";
import {Child} from "../framework/types/node.ts";
import MjsElement from "../framework/core/components.ts"


export const metadata: ComponentMetadata = {
    name: "main",
    description: "main"
}


const Hello = await import("./components/Hello.ts") as Child;
const Test = await import("./components/Test.ts") as Child;
const Hidden = await import("./components/Hidden.ts") as Child;


const Home = MjsElement(
    'div',
    {
        idDom: "home",
        class: "flex flex-col"
    },
    Hello,
    Hidden,
    Test
)


export default Home;