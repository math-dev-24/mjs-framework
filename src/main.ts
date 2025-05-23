import MjsElement from "../framework/core/components.ts"


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
    Counter.default({key: "1"}),
)


export default Home;