"use strict";
// TODO maybe use templating for hydrate track and artist with type
exports.DEEZER_INFOS = {
    identifiers: /.*\/(.*)\/(\d*)\?/g,
    formattedUrl: (identifiers) => {
        return `https://api.deezer.com/${identifiers.type}/${identifiers.id}`;
    }
};
//# sourceMappingURL=config.js.map