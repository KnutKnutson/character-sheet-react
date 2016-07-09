import csFirebase from './firebase';

export default class UserCharacters {
    constructor(uid) {
        this.firebase = csFirebase.app().database();
        this.uid = uid;
        if (uid) {
            // TODO it may just return the results in order of updated at?
            this.userCharacters = this.firebase.ref('/userCharacters/' + uid).orderByChild('updatedAt');
            //this.characterWatchers = this.watchUserCharacters();
        }
    }

    // Bind firebase character to react component
    bindUserCharacters = (component) => {
        if (!this.userCharacters) { return null; }
        var parent = this;
        // TODO watch for new or removed items only?
        this.userCharacters.on('value', function(snapshot) {
            parent.userCharactersData = snapshot.val();
            component.setState({
               userCharacters: parent
            });
        });
        //this.userCharacters.on('child_added', function(data) {
        //    //parent.userCharacters = snapshot.val();
        //    // data.key, data.val()
        //    console.log(data);
        //    component.setState({
        //        userCharacters: parent.userCharacters
        //    });
        //});
        //this.userCharacters.on('child_removed', function(data) {
        //    //parent.userCharacters = snapshot.val();
        //    console.log(data);
        //    component.setState({
        //        userCharacters: parent.userCharacters
        //    });
        //});
        //this.watchUserCharacters(component);
    };

    unBindUserCharacters = () => {
        if (!this.userCharacters) { return null; }
        this.userCharacters.off();
        this.unWatchUserCharacters();
    };

    watchUserCharacters = (component) => {
        let watchers = [];
        for (let character of this.userCharacters) {
            let characterSummary = {

            };
            watchers.push(characterSummary);
        }
        return watchers;
    };

    unWatchUserCharacters = () => {

    };

    getLastSelectedCharacterId = () => {
        if (!this.userCharactersData) { return null; }
        //return this.userCharactersData[1].
    };

    getUserCharacters = () => {

    };

    updateUserCharacter = (characterId) => {

    };
}
