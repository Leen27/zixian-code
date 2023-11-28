import { Panel } from '../gui';
import { ScrollBox, ScrollBoxOptions } from '@pixi/ui';
import { Sprite, Container, DisplayObject } from 'pixi.js';
declare class Stack extends ScrollBox {
    constructor(params: ScrollBoxOptions);
    createBox(): Sprite;
    addItem<T extends Container<DisplayObject>[]>(...items: T): T[0];
}
declare class ObjectInfoPanel extends Panel {
    stack: Stack;
    scope: ScrollBox;
    code: Panel;
    private BOX_SIZE;
    constructor({ width, height }: {
        width: number;
        height: number;
    });
    addStack(config: {
        icon: string;
    }): void;
}
export declare const createObjectInfoPanel: ({ width, height, pixelSizeX, }: {
    pixelSizeX: number;
    width: number;
    height: number;
}) => ObjectInfoPanel;
export {};
