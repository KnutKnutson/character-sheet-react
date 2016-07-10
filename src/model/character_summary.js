import csFirebase from './firebase';

export default class CharacterSummary {
    constructor(characterId) {
        this.firebase = csFirebase.app().database();
        this.attributesToWatch = ['characterName', 'level', 'characterRace', 'characterClass'];
        this.summary = {};
        if (characterId) {
            this.characterFBRef = this.firebase.ref('/characters/' + characterId);
        }
    }

    bind = (component) => {
        if (!this.characterFBRef) { return null; }
        var parent = this;
        for (let attribute of this.attributesToWatch) {
            this.characterFBRef.child(attribute).on('value', function (snapshot) {
                parent.summary[attribute] = snapshot.val();
                component.setState({characterSummary: parent});
            });
        }
    };

    unBind = () => {
        if (!this.characterFBRef) { return null; }
        for (let attribute of this.attributesToWatch) {
            this.characterFBRef.child(attribute).off();
        }
    };
}
