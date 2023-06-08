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
        <div class="info">
            <h3>{{ details.name }}</h3>
            <span>{{ details.archetype }}</span>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

.card {
    flex-basis: calc((100% / 5) - 10px);

    img {
        width: 100%;
    }
}

.info {
    background-color: $primary;
    margin-top: -5px;
    height: 100px;
    text-align: center;

    h3 {
        color: $white;
        padding-bottom: 10px;
    }
}
</style>