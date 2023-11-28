import { Graphics, Sprite } from 'pixi.js';
import { Actor } from './actor';
export type ActorOptions = {
    width: number;
    height: number;
    x: number;
    y: number;
};
export type IconActorOptions = ActorOptions & {
    icon: string;
};
declare class ObjectActor implements Actor {
    appearance: Graphics;
    constructor(options?: ActorOptions);
}
export declare class ObjectActorIcon implements Actor {
    appearance: Sprite;
    constructor({ width, height, x, y, icon }: IconActorOptions);
}
export declare const createObjectActor: (options?: ActorOptions) => ObjectActor;
export {};
