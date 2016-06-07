import csFirebase from './firebase';

export default class Character {
    constructor(characterId) {
        this.firebase = csFirebase.app().database();
        if (characterId) {
            this.characterFBRef = this.firebase.ref('/characters/' + characterId);
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
        // TODO init character, attacks, spells, other lists?
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

    shareCharacter = (characterId, emailsToShareWith) => {
        for (var email of emailsToShareWith) {
            this.characterFBRef.child(email).push(characterId);
        }
    };


    // Field Getters
    userCharacters = () => {

    };

    friendCharacters = () => {

    };

    getFieldByName = (fieldName) => {
        if (!this.character) { return null; }
        return this.character[fieldName];
    };


    // PROFILE --------------------------------------------

    characterName = () => {
        if (this.character) {
            return this.character.characterName;
        }
    };

    playerName = () => {
        if (this.character) {
            return this.character.playerName;
        }
    };

    characterClass = () => {
        if (!this.character) { return null; }
        return this.character.characterClass;
    };

    characterRace = () => {
        if (!this.character) { return null; }
        return this.character.characterRace;
    };

    level = () => {
        if (!this.character) { return null; }
        return this.character.level;
    };

    xp = () => {
        if (!this.character) { return null; }
        return this.character.xp;
    };

    alignment = () => {
        if (!this.character) { return null; }
        return this.character.alignment;
    };

    background = () => {
        if (!this.character) { return null; }
        return this.character.background;
    };

    age = () => {
        if (!this.character) { return null; }
        return this.character.age;
    };

    height = () => {
        if (!this.character) { return null; }
        return this.character.height;
    };

    weight = () => {
        if (!this.character) { return null; }
        return this.character.weight;
    };

    eyes = () => {
        if (!this.character) { return null; }
        return this.character.eyes;
    };

    skin = () => {
        if (!this.character) { return null; }
        return this.character.skin;
    };

    hair = () => {
        if (!this.character) { return null; }
        return this.character.hair;
    };

    backstory = () => {
        if (!this.character) { return null; }
        return this.character.backstory;
    };


    // ATTRIBUTES --------------------------------------------

    inspiration = () => {
        if (!this.character) { return null; }
        return this.character.inspiration;
    };

    proficiencyBonus = () => {
        if (!this.character) { return null; }
        return this.character.proficiencyBonus;
    };

    passiveWisdom = () => {
        if (!this.character) { return null; }
        return this.perception();
    };

    strength = () => {
        if (!this.character) { return null; }
        return this.character.strength;
    };

    dexterity = () => {
        if (!this.character) { return null; }
        return this.character.dexterity;
    };

    constitution = () => {
        if (!this.character) { return null; }
        return this.character.constitution;
    };

    intelligence = () => {
        if (!this.character) { return null; }
        return this.character.intelligence;
    };

    wisdom = () => {
        if (!this.character) { return null; }
        return this.character.wisdom;
    };

    charisma = () => {
        if (!this.character) { return null; }
        return this.character.charisma;
    };

    abilityModifier = (abilityScore) => {
        if (!abilityScore) { return null; }
        let modifier = abilityScore - 10;
        return Math.floor(modifier / 2);
    };

    strengthModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.strength());
    } ;

    dexterityModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.dexterity());
    } ;

    constitutionModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.constitution());
    } ;

    intelligenceModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.intelligence());
    } ;

    wisdomModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.wisdom());
    } ;

    charismaModifier = () => {
        if (!this.character) { return null; }
        return this.abilityModifier(this.charisma());
    };


    skillBonus = (modifier, trained) => {
        if (!modifier) { return 0; }
        modifier = parseInt(modifier);
        return (trained ? (modifier + parseInt(this.proficiencyBonus())) : modifier);
    };

    strengthSavingThrow = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.strengthModifier(), this.strengthSavingThrowTrained());
    };

    dexteritySavingThrow = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.dexterityModifier(), this.dexteritySavingThrowTrained());
    };

    constitutionSavingThrow = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.constitutionModifier(), this.constitutionSavingThrowTrained());
    };

    intelligenceSavingThrow = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.intelligenceModifier(), this.intelligenceSavingThrowTrained());
    };

    wisdomSavingThrow = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.wisdomModifier(), this.wisdomSavingThrowTrained());
    };

    charismaSavingThrow = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.charismaModifier(), this.charismaSavingThrowTrained());
    };

    acrobatics = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.dexterityModifier(), this.acrobaticsTrained());
    };

    animalHandling = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.wisdomModifier(), this.animalHandlingTrained());
    };

    arcana = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.intelligenceModifier(), this.arcanaTrained());
    };

    athletics = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.strengthModifier(), this.athleticsTrained());
    };

    deception = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.charismaModifier(), this.deceptionTrained());
    };

    history = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.intelligenceModifier(), this.historyTrained());
    };

    insight = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.wisdomModifier(), this.insightTrained());
    };

    intimidation = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.charismaModifier(), this.intimidationTrained());
    };

    investigation = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.intelligenceModifier(), this.investigationTrained());
    };

    medicine = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.wisdomModifier(), this.medicineTrained());
    };

    nature = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.intelligenceModifier(), this.natureTrained());
    };

    perception = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.wisdomModifier(), this.perceptionTrained());
    };

    performance = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.charismaModifier(), this.performanceTrained());
    };

    persuasion = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.charismaModifier(), this.persuasionTrained());
    };

    religion = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.intelligenceModifier(), this.religionTrained());
    };

    sleightOfHand = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.dexterityModifier(), this.sleightOfHandTrained());
    };

    stealth = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.dexterityModifier(), this.stealthTrained());
    };

    survival = () => {
        if (!this.character) { return null; }
        return this.skillBonus(this.wisdomModifier(), this.survivalTrained());
    };

    strengthSavingThrowTrained = () => {
        if (!this.character) { return null; }
        return this.character.strengthSavingThrowTrained;
    };

    dexteritySavingThrowTrained = () => {
        if (!this.character) { return null; }
        return this.character.dexteritySavingThrowTrained;
    };

    constitutionSavingThrowTrained = () => {
        if (!this.character) { return null; }
        return this.character.constitutionSavingThrowTrained;
    };

    intelligenceSavingThrowTrained = () => {
        if (!this.character) { return null; }
        return this.character.intelligenceSavingThrowTrained;
    };

    wisdomSavingThrowTrained = () => {
        if (!this.character) { return null; }
        return this.character.wisdomSavingThrowTrained;
    };

    charismaSavingThrowTrained = () => {
        if (!this.character) { return null; }
        return this.character.charismaSavingThrowTrained;
    };

    acrobaticsTrained = () => {
        if (!this.character) { return null; }
        return this.character.acrobaticsTrained;
    };

    animalHandlingTrained = () => {
        if (!this.character) { return null; }
        return this.character.animalHandlingTrained;
    };

    arcanaTrained = () => {
        if (!this.character) { return null; }
        return this.character.arcanaTrained;
    };

    athleticsTrained = () => {
        if (!this.character) { return null; }
        return this.character.athleticsTrained;
    };

    deceptionTrained = () => {
        if (!this.character) { return null; }
        return this.character.deceptionTrained;
    };

    historyTrained = () => {
        if (!this.character) { return null; }
        return this.character.historyTrained;
    };

    insightTrained = () => {
        if (!this.character) { return null; }
        return this.character.insightTrained;
    };

    intimidationTrained = () => {
        if (!this.character) { return null; }
        return this.character.intimidationTrained;
    };

    investigationTrained = () => {
        if (!this.character) { return null; }
        return this.character.investigationTrained;
    };

    medicineTrained = () => {
        if (!this.character) { return null; }
        return this.character.medicineTrained;
    };

    natureTrained = () => {
        if (!this.character) { return null; }
        return this.character.natureTrained;
    };

    perceptionTrained = () => {
        if (!this.character) { return null; }
        return this.character.perceptionTrained;
    };

    performanceTrained = () => {
        if (!this.character) { return null; }
        return this.character.performanceTrained;
    };

    persuasionTrained = () => {
        if (!this.character) { return null; }
        return this.character.persuasionTrained;
    };

    religionTrained = () => {
        if (!this.character) { return null; }
        return this.character.religionTrained;
    };

    sleightOfHandTrained = () => {
        if (!this.character) { return null; }
        return this.character.sleightOfHandTrained;
    };

    stealthTrained = () => {
        if (!this.character) { return null; }
        return this.character.stealthTrained;
    };

    survivalTrained = () => {
        if (!this.character) { return null; }
        return this.character.survivalTrained;
    };


    // COMBAT STATS --------------------------------------------

    armorClass = () => {
        return this.getFieldByName('strength');
    };

    // SPELLS --------------------------------------------

    // FEATURES --------------------------------------------

    // EQUIPMENT --------------------------------------------

    // ALLIES --------------------------------------------

}
