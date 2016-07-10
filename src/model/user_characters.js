import csFirebase from './firebase';
import Character from './character';

export default class UserCharacters {
    constructor(uid) {
        this.firebase = csFirebase.app().database();
        this.uid = uid;
        if (uid) {
            // TODO it may just return the results in order of updated at?
            this.userCharacters = this.firebase.ref('/userCharacters/' + uid);
            //this.characterWatchers = this.watchUserCharacters();
        }
    }

    bindUserCharacters = (component) => {

        if (!this.userCharacters) { return null; }
        var parent = this;
        // having a watcher here fucks up the body.js:changeCharacter callback as it's currently implemented.
        // therefore loading once.
        this.userCharacters.once('value').then(function(snapshot) {
            parent.userCharactersData = snapshot.val();
            parent.userCharacterSummary = parent.getUserCharactersSummaries();
            component.setState({
                userCharacters: parent,
                characterId: parent.userCharacterSummary[0].uid
            });
        });
    };

    unBindUserCharacters = () => {
        if (!this.userCharacters) { return null; }
        this.userCharacters.off();
        this.unWatchUserCharacters();
    };

    unWatchUserCharacters = () => {

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
    }
}
