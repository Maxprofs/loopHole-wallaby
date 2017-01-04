export declare type TYPEOFACTION = {
    type: string;
    value?: string | any;
};
export declare class Reducer {
    private _store;
    constructor();
    private reducerEngine(state, action);
    private checkConformity(action);
    private initStore();
    /**
     * getStore
     * @returns <Redux.Store>
     */
    getStore(): any;
    /**
     * getState
     * @returns <Redux.Store.getState()>
     */
    getState(): any;
    dispatchAction(action: TYPEOFACTION): void;
}
