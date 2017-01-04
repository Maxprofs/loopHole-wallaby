// import { createStore } from 'redux';
import { conformityPolicies } from './conformityPolicies';
import { actionsCollection } from './actionsCollections';
import { LazyRequirer } from '../../config/lazyRequire';

const createStore = LazyRequirer.loadModule('redux/createStore');

export type TYPEOFACTION = {
    type: string,
    value?: string | any
};

export class Reducer {

    private _store;

    constructor() {
        this.initStore();
    }

    private reducerEngine(state = {}, action) {
        const _this = this;
        for (let {name: actionName, stateName: stateName} of actionsCollection) {
            if (actionName === action.type) {
                console.log(`REDUX: ACTION => '${actionName}'`);
                if (this.checkConformity(action)) {
                    return {...state,
                        [stateName]: action.value
                    };
                }
            }
        }
        return state;
    }

    private checkConformity(action: any): boolean {
        for (let policy in conformityPolicies) {
            if (policy === action.type) {
                return conformityPolicies[policy](action.value);
            } else {
                return true;
            }
        }
    }

    private initStore() {
        // Here i had to bind the reducerEngin to keep the access to Reducer class methods 
        const store = createStore(this.reducerEngine.bind(this));
        this._store = store;
    }

    /**
     * getStore
     * @returns <Redux.Store>
     */
    public getStore() {
        return this._store;
    }

    /**
     * getState
     * @returns <Redux.Store.getState()>
     */
    public getState() {
        const store = this.getStore();
        return store.getState();
    }

    public dispatchAction(action: TYPEOFACTION) {
        const store = this.getStore();
        store.dispatch(action);
    }
}
