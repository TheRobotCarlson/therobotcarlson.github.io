<template>
  <v-app class="layout" dark>
   

    <v-app-bar
      app
      dark
      elevate-on-scroll
      extension-height="40"
    >

      <v-container class="pa-0 d-flex align-center">
        <v-toolbar-title>{{ $static.metadata.siteName }}</v-toolbar-title>

        <v-spacer />

  

         <v-btn
            aria-label="button"
            class="hidden-md-and-down"
            min-width="48"
            text
            :to="path"
          >
            <span class="subtitle-1 text-capitalize font-weight-light">
              <base-markdown><slot /></base-markdown>
            </span>
            <base-nav-text>Vuetify.AppToolbar.enterprise</base-nav-text>
          </v-btn>
        
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </v-container>

      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </v-app-bar>

    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <slot/>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
