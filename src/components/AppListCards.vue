<script>
import { store } from '../store.js';
import AppSingleCard from './AppSingleCard.vue';

export default {
    name: 'AppListCards',
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
    <div class="row">
        <AppSingleCard v-for="card in store.cardList" :details="card" :key="card.id" />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

.row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
</style>