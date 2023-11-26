import { Container } from 'pixi.js';
type Options = {
    width: number;
    height: number;
    x: number;
    y: number;
    bgColor: string | number;
    zIndex: number;
};
export declare class Panel extends Container<any> {
    constructor(options?: Partial<Options>);
}
export declare function createPanel(options?: Partial<Options>): Panel;
export {};
