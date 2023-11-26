import { Panel } from '../gui';
import { ScrollBox } from '@pixi/ui';
import { IconActorOptions } from './object';
declare class ObjectInfoPanel extends Panel {
    stack: ScrollBox;
    scope: ScrollBox;
    code: Panel;
    private BOX_SIZE;
    constructor({ width, height }: {
        width: number;
        height: number;
    });
    addStack(config: IconActorOptions): void;
}
export declare const createObjectInfoPanel: ({ width, height, pixelSizeX, }: {
    pixelSizeX: number;
    width: number;
    height: number;
}) => ObjectInfoPanel;
export {};
