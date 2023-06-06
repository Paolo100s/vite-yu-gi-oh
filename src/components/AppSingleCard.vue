<script>
export default {
    name: 'AppSingleCard',
    props: {
        details: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="details.card_images[0].image_url" :alt="details.name">
        <h3>{{ details.name }}</h3>
        <span>{{ details.archetype }}</span>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>