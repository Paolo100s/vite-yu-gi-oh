<script>
import { store } from './../store.js'
import AppSingleCard from './AppSingleCard.vue';

export default {
    name: 'AppListCard',
    components: {
        AppSingleCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <AppSingleCard v-for="card in store.cardList" :details="card" :key="card.id" />
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>