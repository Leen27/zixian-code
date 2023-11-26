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
declare class ObjectActor extends Actor {
    constructor(options?: ActorOptions);
}
export declare class ObjectActorIcon extends Actor {
    constructor({ width, height, x, y, icon }: IconActorOptions);
}
export declare const createObjectActor: (options?: ActorOptions) => ObjectActor;
export {};
