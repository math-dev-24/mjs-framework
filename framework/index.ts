import MjsFramework from "./core";
import {Component} from "./types/component.ts";


const initMjs = async () => {
    console.log("🚀 MJS Framework");

    const mjs = new MjsFramework();
    const main: Component = await import("../src/main.ts");
    mjs.render(main, "#app");
}


document.addEventListener("DOMContentLoaded", initMjs);
