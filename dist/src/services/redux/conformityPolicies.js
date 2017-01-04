"use strict";
const saveMusicMetadata = (value) => {
    for (let property in value) {
        if (!value[property]) {
            // TODO here slack message to inform user about the problem
            throw `saveMusicMetadata Policies not satisfied 
 value.${property} = null`;
        }
    }
    return true;
};
exports.conformityPolicies = {
    SAVE_MUSIC_METADATA: saveMusicMetadata
};
//# sourceMappingURL=conformityPolicies.js.map