declare class Drama<T> {
    private _project;
    constructor(state: any);
    play(sheetName: string, objectName: string, data: T, handleValueChange: (data: T) => void): void;
}
export declare function createDrama<T>(state: any): Drama<T>;
export {};
