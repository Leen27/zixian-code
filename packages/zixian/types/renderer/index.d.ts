import { Application } from "pixi.js";
export type RenderConfig = {
    background: string;
};
export declare class Renderer extends Application {
    _dom: HTMLElement | null;
    constructor(dom: HTMLElement, config?: RenderConfig);
}
