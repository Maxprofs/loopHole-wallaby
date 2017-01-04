import { LazyRequirer } from './lazyRequire';

const [fs, path, chalk] = LazyRequirer.loadModule(['fs', 'path', 'chalk']);

const pathLocalFile = path.resolve(path.join(__dirname, './config.dev.js'));
// TODO put this below away from this file
export const  URL_TYPE_REGEX = {
    'DEEZER': /.*\/\/www.(deezer)/g,
    'SPOTIFY': /.*\/\/www.(spotify)/g
};

export class Config {

    static getConfig(): any {
        if (fs.existsSync(pathLocalFile)) {
            console.log(chalk.yellow('Developpement configuration used.'));
            return require('./config.dev');
        } else {
            console.log(chalk.red('Production configuration used.'));
            return require('./config.prod');
        }
    }
}
