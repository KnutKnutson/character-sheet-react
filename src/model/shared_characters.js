import csFirebase from './firebase';

export default class SharedCharacters {
    constructor(uid) {
        this.firebase = csFirebase.app().database();
        this.uid = uid;
        if (uid) {
            // TODO it may just return the results in order of updated at?

            this.sharedCharacters = this.firebase.ref('/sharedCharacters/' + uid).orderByChild('updatedAt');
            //this.characterWatchers = this.watchUserCharacters();
        }
    }

    // Bind firebase character to react component
    bindSharedCharacters = (component) => {
        if (!this.sharedCharacters) { return null; }
        var parent = this;
        this.sharedCharacters.on('value', function(snapshot) {
            parent.sharedCharactersData = snapshot.val();
            component.setState({
                sharedCharacters: parent
            });
        });
    };

    unBindSharedCharacters = () => {
        if (!this.sharedCharacters) { return null; }
        this.sharedCharacters.off();
        this.unWatchUserCharacters();
    };

    watchSharedCharacters = (component) => {
        let watchers = [];
        for (let character of this.sharedCharacters) {
            let characterSummary = {

            };
            watchers.push(characterSummary);
        }
        return watchers;
    };

    unWatchSharedCharacters = () => {

    };

    getLastSelectedCharacterId = () => {
        if (!this.sharedCharactersData) { return null; }
        //return this.sharedCharactersData[1].
    };

    getUserCharacters = () => {

    };

    updateSharedCharacter = (characterId) => {

    };
}
