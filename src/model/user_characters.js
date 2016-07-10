import csFirebase from './firebase';
import Character from './character';

export default class UserCharacters {
    constructor(uid) {
        this.firebase = csFirebase.app().database();
        this.uid = uid;
        if (uid) {
            this.userCharacters = this.firebase.ref('/userCharacters/' + uid);
            this.sharedCharacters = this.firebase.ref('/sharedCharacters/');
        }
    }

    bindUserCharacters = (component) => {
        this.component = component;
        if (!this.userCharacters) { return null; }
        let parent = this;
        // having a watcher here fucks up the body.js:changeCharacter callback as it's currently implemented.
        // therefore loading once via refreshdata method instead of on('value').  Consider on('child_added'/removed) instead
        this.refreshData(() => {
            component.setState({
                userCharacters: parent,
                characterId: parent.userCharacterSummary[0].uid
            });
        });
    };

    unBindUserCharacters = () => {
        if (!this.userCharacters) { return null; }
        this.userCharacters.off();
    };

    refreshData = (callBack) => {
        let parent = this;
        this.userCharacters.once('value').then(function(snapshot) {
            parent.userCharactersData = snapshot.val();
            parent.userCharacterSummary = parent.getUserCharactersSummaries();
            if (callBack) { callBack(); }
        });
    };

    getLastSelectedCharacterId = () => {
        if (!this.userCharacterSummary) { return null; }
        return this.userCharacterSummary[0].uid;
    };

    getUserCharactersSummaries = () => {
        if (!this.userCharactersData) { return null; }
        let characters = [];
        for (let characterId in this.userCharactersData) {
            if (this.userCharactersData.hasOwnProperty(characterId)) {
                characters.push({
                    uid: characterId,
                    updatedAt: this.userCharactersData[characterId].updatedAt
                });
            }
        }
        characters.sort(function(a, b) {
            a = a.updatedAt;
            b = b.updatedAt;
            return a < b ? 1 : (a > b ? -1 : 0);
        });
        return characters;
    };

    updateUserCharacter = (characterId) => {
        if (characterId) {
            this.userCharacters.child(characterId).update({updatedAt: new Date().getTime()});
        }
    };

    newUserCharacter = () => {
        let newCharacterKey = this.userCharacters.push().key;
        this.updateUserCharacter(newCharacterKey);
        return newCharacterKey;
    };

    updateUserCharacterShares = (emailArray, characterId) => {
        if (!this.userCharactersData) { return null; } // && !this.component
        for (let email of emailArray) {
            this.shareUserCharacter(email, characterId);
        }
        let previouslySharedWith = this.getSharedEmails();
        for (let oldShare of previouslySharedWith) {
            if (!emailArray.includes(oldShare)) {
                this.unShareCharacter(oldShare, characterId);
            }
        }
        this.refreshData();
    };

    removeAllUserCharacterShares = (characterId) => {
        this.updateUserCharacterShares([], characterId);
    };

    shareUserCharacter = (email, characterId) => {
        if (!this.sharedCharacters) { return null; }
        this.sharedCharacters.child(email + '/' + characterId).update(true);
    };

    unShareCharacter = (email, characterId) => {
        if (!this.sharedCharacters) { return null; }
        this.sharedCharacters.child(email + '/' + characterId).remove();
    };

    getSharedEmails = (characterId) => {
        if (!this.userCharactersData) { return null; }
        if (this.userCharactersData[characterId].sharedWith) {
            return this.userCharactersData[characterId].sharedWith.keys();
        } else {
            return [];
        }
    };

    deleteUserCharacter = (characterId) => {
        this.removeAllUserCharacterShares(characterId);
        this.userCharacters.child(characterId).remove();
    };
}
