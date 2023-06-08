<script>
import { store } from './../store.js';

export default {
    name: 'AppSearch',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section>
        <form>
            <div class="search">
                <select name="archetypes" id="archetypes_select" v-model="store.chosenArchetype"
                    @change="$emit('selected')">
                    <option value="">All</option>
                    <option v-for="(archetype, index) in store.archetypesList" value="archetype.archetype_name"
                        :key="index">{{ archetype.archetype_name }}</option>
                </select>
            </div>
        </form>
    </section>
</template>

<style lang="scss">
.search {
    width: 90%;
    padding: 20px 0 10px;
    margin: auto;
}
</style>