import { Container } from 'pixi.js';
import type { Renderer } from '../renderer';
export declare class GUI extends Container<any> {
    renderer: Renderer;
    constructor(renderer: Renderer);
    init(): void;
    getContainerSize(): {
        width: number;
        height: number;
    };
}
export declare function createGUI(renderer: Renderer): GUI;
