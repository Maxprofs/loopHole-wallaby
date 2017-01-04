"use strict";
const lazyRequire_1 = require("./lazyRequire");
const [fs, path, chalk] = lazyRequire_1.LazyRequirer.loadModule(['fs', 'path', 'chalk']);
const pathLocalFile = path.resolve(path.join(__dirname, './config.dev.js'));
// TODO put this below away from this file
exports.URL_TYPE_REGEX = {
    'DEEZER': /.*\/\/www.(deezer)/g,
    'SPOTIFY': /.*\/\/www.(spotify)/g
};
class Config {
    static getConfig() {
        if (fs.existsSync(pathLocalFile)) {
            console.log(chalk.yellow('Developpement configuration used.'));
            return require('./config.dev');
        }
        else {
            console.log(chalk.red('Production configuration used.'));
            return require('./config.prod');
        }
    }
}
exports.Config = Config;
//# sourceMappingURL=index.js.map