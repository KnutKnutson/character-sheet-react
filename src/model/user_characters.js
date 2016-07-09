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

    // Bind firebase character to react component
    bindUserCharacters = (component) => {

        if (!this.userCharacters) { return null; }
        var parent = this;
        this.userCharacters.on('value', function(snapshot) {
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

    watchUserCharacters = (component) => {
        //let watchers = [];
        //for (let character of this.userCharacters) {
        //    let characterSummary = {
        //
        //    };
        //    watchers.push(characterSummary);
        //}
        //return watchers;
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
                let fullCharacter = new Character(characterId);
                characters.push({
                    uid: characterId,
                    characterName: fullCharacter.characterName(),
                    level: fullCharacter.level(),
                    characterRace: fullCharacter.characterRace(),
                    characterClass: fullCharacter.characterClass(),
                    updatedAt: this.userCharactersData[characterId]
                });
            }
        }
        characters.sort(function(a, b) {
            a = a.updatedAt;
            b = b.updatedAt;
            return a < b ? -1 : (a > b ? 1 : 0);
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
