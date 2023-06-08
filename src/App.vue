<script>
import axios from './../node_modules/axios';
import AppHeader from './components/AppHeader.vue';
import AppListCards from './components/AppListCards.vue';
import AppSingleCard from './components/AppSingleCard.vue';
import { store } from './store.js';
import AppLoader from './components/AppLoader.vue';
import AppSearch from './components/AppSearch.vue';

export default {
    components: {
        axios,
        AppHeader,
        AppListCards,
        AppSingleCard,
        AppLoader,
        AppSearch
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getCards() {

            let myURL = store.apiURL;

            if (store.chosenArchetype !== "") {
                myURL = store.apiURL_Archetype + `${store.chosenArchetype}`;

            }
            axios.get(myURL)
                .then(res => {
                    store.cardsList = res.data.data;
                    console.log(store.cardsList);
                    store.loading = false;
                })
                .catch(err => {
                    console.log(err.message);
                })

        },
        getArchetypes() {
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
                .then(resArch => {
                    store.archetypesList = resArch.data
                    console.log(store.archetypesList);
                })
        }
    },
    created() {
        this.getCards();
        this.getArchetypes();
    }
}

</script>

<template>
    <AppLoader v-if="store.loading" />
    <header>
        <div class="container">
            <AppHeader />
        </div>

    </header>

    <main>
        <div class="container">
            <AppSearch @selected="getCards" />
            <div class="deck_container">
                <section class="found">
                    <h2>Cards found</h2>
                </section>
                <section>
                    <AppListCards />
                </section>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/partials/variables' as *;
</style>
