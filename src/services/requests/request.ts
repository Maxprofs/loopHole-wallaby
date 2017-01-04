import { LazyRequirer } from '../../config/lazyRequire';
const fetch = LazyRequirer.loadModule('node-fetch');

export class RemoteServices {
    static fetchFromUrl(url: string): Promise<any> {
        return fetch(url)
            .then((response: any) => {
                return response.json();
            });
    }
}
