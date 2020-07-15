<template>
  <v-app>
    
    <page-nav-bar />

    <v-content app class="flex-grow">
      <slot />
    </v-content>

    <page-footer/>

  </v-app>

</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>

import PageFooter from '../components/PageFooter'
import PageNavBar from '../components/PageNavBar'

export default {
  components: {
    PageFooter,
    PageNavBar
  },
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

