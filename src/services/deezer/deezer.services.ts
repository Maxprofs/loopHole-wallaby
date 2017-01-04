import { DeezerAuthServices } from './deezer.auth';
import { RemoteServices } from '../requests/request';
import { Reducer } from '../redux/redux';
import { URL_TYPE_REGEX } from '../../config/index';
import { DEEZER_INFOS } from './config';

export class DeezerServices extends DeezerAuthServices {

    static fetchAppSource(reducer: Reducer) {
        const state = reducer.getState();
        let url: string = state.SOURCE_URL;
        for (let appName in URL_TYPE_REGEX) {
            const regex = new RegExp(URL_TYPE_REGEX[appName]);
            const regResults: any = regex.exec(url);
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

    static parseSourceUrl(reducer: Reducer) {
        const url = reducer.getState().SOURCE_URL;
        const regex = new RegExp(DEEZER_INFOS.identifiers);
        const regResults = regex.exec(url);

        reducer.dispatchAction({
            type: 'SAVE_MUSIC_METADATA',
            value: {
            type: regResults ? regResults[1] : null,
            id: regResults ? regResults[2] : null
            }
        });

    }

    static *translateUrlToMusicMetadata(reducer: Reducer) {
        const identifiers = reducer.getState().MUSIC_METADATA;
        const url = DEEZER_INFOS.formattedUrl(identifiers);
        console.log(url);
        let haveNextProperty = true;
        let nextUrl = url;
        while (haveNextProperty) {
            let response = yield RemoteServices.fetchFromUrl(nextUrl);
            if (!response.next) {
                haveNextProperty = false;
            } else {
                nextUrl = response.next;
            }
            console.log(response);
            console.log(`NEXT URL => ${nextUrl}`);
        }
        console.log('DONE !');
    }

    static *translateMusicMetadataToUrl(reducer: Reducer) {
    }
}
