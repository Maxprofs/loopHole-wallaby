"use strict";
const request_1 = require("../src/services/requests/request");
// const [chai, sinon, mocha] = LazyRequirer.loadModule(['chai, sinon, mocha']);
const chai = require('../src/config/lazyRequire');
describe('Index -- tests', function () {
    it('should add numbers', function () {
        const reducer = request_1.RemoteServices.fetchFromUrl('http://google.fr');
        reducer.then(x => {
            console.log(x);
        });
        // expect(true).to.be.true;
    });
});
//# sourceMappingURL=index.spec.js.map