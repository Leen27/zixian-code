import { Container, Graphics, Sprite } from 'pixi.js';
import type { GUI } from '../gui/gui';
export interface Actor {
    appearance: Graphics | Container | Sprite;
}
export declare function createActor(gui: GUI, actor: Actor): Container<import("pixi.js").DisplayObject> | Graphics | Sprite;
