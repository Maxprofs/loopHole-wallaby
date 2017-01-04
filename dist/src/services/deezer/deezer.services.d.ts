import { DeezerAuthServices } from './deezer.auth';
import { Reducer } from '../redux/redux';
export declare class DeezerServices extends DeezerAuthServices {
    static fetchAppSource(reducer: Reducer): void;
    static parseSourceUrl(reducer: Reducer): void;
    static translateUrlToMusicMetadata(reducer: Reducer): IterableIterator<Promise<any>>;
    static translateMusicMetadataToUrl(reducer: Reducer): IterableIterator<any>;
}
