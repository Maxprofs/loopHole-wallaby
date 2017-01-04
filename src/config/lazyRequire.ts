import * as _ from 'lodash';

let listOfImportatedModules: any = {
    lodash: _
};

const displayModulesImportated = (template, ...expressions) => {
    let concatString = '\n';
    let templateSliced = template[0];
    for (let moduleName in expressions[0]) {
        concatString += `${moduleName}\n`;
    }
    return templateSliced + concatString;
};

export class LazyRequirer {

    static loadModule(moduleName: any): any {
        if (Array.isArray(moduleName)) {
            let concatArrayOfModuleNeeded = [];
            for (let module of moduleName) {
                let moduleImported = LazyRequirer.importModuleEngine(module);
                concatArrayOfModuleNeeded = [...concatArrayOfModuleNeeded, moduleImported];
            }
            return concatArrayOfModuleNeeded;
        } else {
            return LazyRequirer.importModuleEngine(moduleName);
        }
    }

    static importModuleEngine(moduleName) {
        if (_.has(listOfImportatedModules, moduleName)) {
            console.log(`LAZYLOADER: Module ${moduleName} already imported ;)`);
            console.log(displayModulesImportated`LAZYLOADER: In bank we have : ${listOfImportatedModules}`);
            return listOfImportatedModules[moduleName];
        } else {
            // check if there is a / with regex
            let regex = new RegExp(/(.*)\/(.*)/g);
            let regResults = regex.exec(moduleName);
            let module = {};
            if (regResults) {
                module = require(regResults[1]);
                module = module[regResults[2]];
            } else {
                module = require(moduleName);
            }
            listOfImportatedModules = {...listOfImportatedModules,
                [moduleName]: module
            };
            return listOfImportatedModules[moduleName];
        }
    }
}