import Firebase from 'firebase';

export default class Character {
    constructor(characterId) {
        this.url = config.firebase.url;
        this.firebase = new Firebase(this.url);
        if (characterId) {
            this.characterFBRef = this.firebase.child('/characters/' + characterId);
        } else {
            this.characterFBRef = this.newCharacter();
        }
    }


    // Bind firebase character to react component
    bindFireBaseCharacter = (component) => {
        var parent = this;
        this.characterFBRef.on('value', function(snapshot) {
            parent.character = snapshot.val();
            component.setState({character: parent});
        });
    };

    unBindFireBaseCharacter = () => {
        this.characterFBRef.off();
    };


    // DML
    newCharacter = () => {
        return null;
    };

    deleteCharacter = () => {
        this.characterFBRef.delete();
    };

    updateCharacter = (path, value, callback) => {
        let updateHash = {};
        updateHash[path] = value;
        this.characterFBRef.update(updateHash);
    };

    pushCharacter = (path, value, callback) => {

    };


    // Field Getters
    characterName = () => {
        if (this.character) {
            return this.character.characterName;
        }
    };
}
