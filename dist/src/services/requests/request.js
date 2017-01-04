"use strict";
const lazyRequire_1 = require("../../config/lazyRequire");
const fetch = lazyRequire_1.LazyRequirer.loadModule('node-fetch');
class RemoteServices {
    static fetchFromUrl(url) {
        return fetch(url)
            .then((response) => {
            return response.json();
        });
    }
}
exports.RemoteServices = RemoteServices;
//# sourceMappingURL=request.js.map