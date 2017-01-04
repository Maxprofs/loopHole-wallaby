"use strict";
class DeezerAuthServices {
    static getToken() {
        // get token url
        // https://connect.deezer.com/oauth/access_token.php?app_id=218464&secret=9046e790886485acec8ae58ec24b3f8d&code=CODE
        return 'token';
    }
    static getCode() {
        // get code url
        // fetch(`https://connect.deezer.com/oauth/auth.php\?app_id\=${Config.getConfig().DEEZER_APP_ID}\&redirect_uri\=http://iron-lynx.fr\&perms\=basic_access,email`)
        return 'code';
    }
}
exports.DeezerAuthServices = DeezerAuthServices;
//# sourceMappingURL=deezer.auth.js.map