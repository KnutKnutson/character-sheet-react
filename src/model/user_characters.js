import csFirebase from './firebase';

export default class UserCharacters {
    constructor(uid) {
        this.firebase = csFirebase.app().database();
        if (uid) {
            this.userCharacters = this.firebase.ref('/userCharacters/' + uid);
        }
    }

    // Bind firebase character to react component
    bindUserCharacters = (component) => {
        if (!this.userCharacters) { return null; }
        var parent = this;
        this.userCharacters.on('value', function(snapshot) {
            parent.character = snapshot.val();
            component.setState({character: parent});
        });
    };

    unBindUserCharacters = () => {
        if (!this.userCharacters) { return null; }
        this.userCharacters.off();
    };

    getLastSelectedCharacterId = () => {

    }
}
