<template>
  <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
    <v-icon v-if="$vuetify.theme.dark">mdi-weather-night</v-icon>
    <v-icon v-else>mdi-weather-sunny</v-icon>
  </v-btn>
 
</template>

<script>
export default {

}
</script>

