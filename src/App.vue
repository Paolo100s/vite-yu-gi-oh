<script>
import axios from './../node_modules/axios';
import AppHeader from './components/AppHeader.vue';
import AppListCard from './components/AppListCard.vue';
import AppSingleCard from './components/AppSingleCard.vue';
import { store } from './store.js'

export default {
    components: {
        axios,
        AppHeader,
        AppListCard,
        AppSingleCard
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getCards() {
            axios.get(store.apiURL)
                .then(res => {
                    store.cardList = res.data;
                    console.log(store.cardList);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
    created() {
        this.getCards();
    }
}

</script>

<template>
    <header>
        <AppHeader />
    </header>
    <main>
        <section>
            <AppListCard />
        </section>
    </main>
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/partials/variables' as *;
</style>
