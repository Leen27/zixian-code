import type { GUI } from './gui';
import type { RenderConfig } from './renderer';
import { Renderer } from './renderer';
export * from './gui';
export * from './actor';
export * from './drama';
export * from './renderer';
export declare class Zixian {
    _domContainer: HTMLElement | null;
    renderer: Renderer | null;
    gui: GUI;
    constructor(dom: HTMLElement, config?: RenderConfig);
}
export declare const createZixian: (domId: string | HTMLElement, config?: RenderConfig) => Zixian | undefined;
export declare const zixian: () => void;
