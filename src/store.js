import { reactive } from 'vue'

export const store = reactive({
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cardsList: [],
    loading: true,
    archetypesList: [],
    chosenArchetype: "",
    apiURL_Archetype: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype='

    // https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=archetype.archetype_name
});