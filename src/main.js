// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
// import { preset } from 'vue-cli-plugin-vuetify-preset-rally/preset'

import DefaultLayout from '~/layouts/Default.vue'

import DevpostLogo from './components/DevpostLogo.vue'

export default function (Vue, { router, isClient, appOptions, head }) {

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {
    // preset,
    theme: {
      dark: false
    },
    icons: {
      iconfont:'mdi',
      values: {
        github: 'mdi-github',
        website: 'mdi-open-in-new',
        linkedin: 'mdi-linkedin',
        devpost: {component: DevpostLogo}
      },
    }
  }; // opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify(opts);
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}