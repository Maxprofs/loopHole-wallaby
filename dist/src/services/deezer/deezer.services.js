"use strict";
const deezer_auth_1 = require("./deezer.auth");
const request_1 = require("../requests/request");
const index_1 = require("../../config/index");
const config_1 = require("./config");
class DeezerServices extends deezer_auth_1.DeezerAuthServices {
    static fetchAppSource(reducer) {
        const state = reducer.getState();
        let url = state.SOURCE_URL;
        for (let appName in index_1.URL_TYPE_REGEX) {
            const regex = new RegExp(index_1.URL_TYPE_REGEX[appName]);
            const regResults = regex.exec(url);
            if (regResults && regResults[1] === appName.toLowerCase()) {
                reducer.dispatchAction({
                    type: 'SAVE_APP_SOURCE',
                    value: appName
                });
            }
        }
        // DEBUG
        if (!reducer.getState().APP_SOURCE) {
            console.log('APP_SOURCE NOT FOUND');
        }
    }
    static parseSourceUrl(reducer) {
        const url = reducer.getState().SOURCE_URL;
        const regex = new RegExp(config_1.DEEZER_INFOS.identifiers);
        const regResults = regex.exec(url);
        reducer.dispatchAction({
            type: 'SAVE_MUSIC_METADATA',
            value: {
                type: regResults ? regResults[1] : null,
                id: regResults ? regResults[2] : null
            }
        });
    }
    static *translateUrlToMusicMetadata(reducer) {
        const identifiers = reducer.getState().MUSIC_METADATA;
        const url = config_1.DEEZER_INFOS.formattedUrl(identifiers);
        console.log(url);
        let haveNextProperty = true;
        let nextUrl = url;
        while (haveNextProperty) {
            let response = yield request_1.RemoteServices.fetchFromUrl(nextUrl);
            if (!response.next) {
                haveNextProperty = false;
            }
            else {
                nextUrl = response.next;
            }
            console.log(response);
            console.log(`NEXT URL => ${nextUrl}`);
        }
        console.log('DONE !');
    }
    static *translateMusicMetadataToUrl(reducer) {
    }
}
exports.DeezerServices = DeezerServices;
//# sourceMappingURL=deezer.services.js.map