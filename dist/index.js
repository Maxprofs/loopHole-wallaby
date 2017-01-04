"use strict";
const config_index_1 = require("./src/config/config.index");
const deezer_services_1 = require("./src/services/deezer/deezer.services");
const co = require("co");
const redux_1 = require("./src/services/redux/redux");
const lazyRequire_1 = require("./src/config/lazyRequire");
const chalk = lazyRequire_1.LazyRequirer.loadModule('chalk');
console.log(chalk.blue.underline.bold('Slack App - ListenMyMusic'));
config_index_1.Config.getConfig();
const reducer = new redux_1.Reducer();
reducer.dispatchAction({
    type: 'SAVE_URL_GIVEN',
    value: 'http://www.deezer.com/artist/935?utm_source=deezer&utm_content=artist-935&utm_term=5836727_1483027142&utm_medium=web'
});
deezer_services_1.DeezerServices.fetchAppSource(reducer);
deezer_services_1.DeezerServices.parseSourceUrl(reducer);
console.log(reducer.getState());
co(deezer_services_1.DeezerServices.translateUrlToMusicMetadata(reducer));
//# sourceMappingURL=index.js.map