<template>
    <v-btn
        text
        to="/"
        exact
    >       
        <h2> Brian (The Robot) Carlson </h2>
    </v-btn>
    <!-- <div>
       
        <g-link v-if="$vuetify.theme.dark" to="/"><g-image src="../../static/logo_dark_mode.svg" class="w-40" alt="logo" /></g-link>
        <g-link v-else to="/"><g-image src="../../static/logo.svg" class="w-40" alt="logo" /></g-link>
    </div> -->
</template>

<script>
export default {

}
</script>

<style scoped>
    .v-btn--active:before {
        opacity: 0 !important;
    }
</style>