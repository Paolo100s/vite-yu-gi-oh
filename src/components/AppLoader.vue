<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
    <div class="loading">
        <h1>LOADING...</h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.loading {
    height: 100vh;
    background-color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>