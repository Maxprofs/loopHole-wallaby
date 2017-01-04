import { Config } from './src/config/config.index';
import { DeezerServices } from './src/services/deezer/deezer.services';
import * as fetch from 'node-fetch';
import * as co from 'co';
import { Reducer } from './src/services/redux/redux';
import { LazyRequirer } from './src/config/lazyRequire';

const chalk = LazyRequirer.loadModule('chalk');
console.log(chalk.blue.underline.bold('Slack App - ListenMyMusic'));

Config.getConfig();
const reducer = new Reducer();
reducer.dispatchAction({
    type: 'SAVE_URL_GIVEN',
    value: 'http://www.deezer.com/artist/935?utm_source=deezer&utm_content=artist-935&utm_term=5836727_1483027142&utm_medium=web'
  });
DeezerServices.fetchAppSource(reducer);
DeezerServices.parseSourceUrl(reducer);
console.log(reducer.getState());
co(DeezerServices.translateUrlToMusicMetadata(reducer));
