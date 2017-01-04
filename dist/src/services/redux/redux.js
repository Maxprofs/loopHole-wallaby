"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// import { createStore } from 'redux';
const conformityPolicies_1 = require("./conformityPolicies");
const actionsCollections_1 = require("./actionsCollections");
const lazyRequire_1 = require("../../config/lazyRequire");
const createStore = lazyRequire_1.LazyRequirer.loadModule('redux/createStore');
class Reducer {
    constructor() {
        this.initStore();
    }
    reducerEngine(state = {}, action) {
        const _this = this;
        for (let { name: actionName, stateName: stateName } of actionsCollections_1.actionsCollection) {
            if (actionName === action.type) {
                console.log(`REDUX: ACTION => '${actionName}'`);
                if (this.checkConformity(action)) {
                    return __assign({}, state, { [stateName]: action.value });
                }
            }
        }
        return state;
    }
    checkConformity(action) {
        for (let policy in conformityPolicies_1.conformityPolicies) {
            if (policy === action.type) {
                return conformityPolicies_1.conformityPolicies[policy](action.value);
            }
            else {
                return true;
            }
        }
    }
    initStore() {
        // Here i had to bind the reducerEngin to keep the access to Reducer class methods 
        const store = createStore(this.reducerEngine.bind(this));
        this._store = store;
    }
    /**
     * getStore
     * @returns <Redux.Store>
     */
    getStore() {
        return this._store;
    }
    /**
     * getState
     * @returns <Redux.Store.getState()>
     */
    getState() {
        const store = this.getStore();
        return store.getState();
    }
    dispatchAction(action) {
        const store = this.getStore();
        store.dispatch(action);
    }
}
exports.Reducer = Reducer;
//# sourceMappingURL=redux.js.map