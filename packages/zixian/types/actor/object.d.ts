import { Actor } from './actor';
type Options = {
    position: {
        x: number;
        y: number;
    };
};
declare class ObjectActor extends Actor {
    constructor(options?: Options);
}
export declare const createObjectActor: (options?: Options) => ObjectActor;
export {};
