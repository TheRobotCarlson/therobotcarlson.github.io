<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            clipped
            temporary
            app
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    active-class=""
                >
                    <v-list-item>
                        <brian-logo />
                    </v-list-item>
                    <v-divider/>
                    <template v-for="(item) in menuPages">
                        
                        <!-- all list items extend router-link -->
                        <v-list-item 
                            v-if="$route.path === '/'"
                            :key="item.text" 
                            @click="drawer=false"
                            :to="item.href"
                            v-scroll-to="item.scrollTo"
                        >
                            <v-list-item-icon v-if="item.icon">
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.text }}</v-list-item-title>
                            </v-list-item-content>
                    
                        </v-list-item>
                        <!-- <v-list-item
                            v-else
                            :key="item.text" 
                            @click="drawer=false"
                            :to="item.href"
                        >
                        </v-list-item> -->
                    </template>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-container class="section">

        <v-app-bar
            clipped-left
            app
            elevate-on-scroll
            short
            prominent
            :shrink-on-scroll="true"
        >
        
            <v-app-bar-nav-icon
                class="hidden-sm-and-up"
                @click="drawer = !drawer"
            />

            <v-toolbar-items class="hidden-xs-only">
                <brian-logo/>
            </v-toolbar-items>

            <v-spacer></v-spacer>
            
            <v-toolbar-items class="hidden-xs-only">
                <template v-for="item in menuPages">
                    <v-btn
                        v-if="$route.path === '/'"
                        class="hidden-xs-only"
                        text
                        :key="item.text"
                        :href="item.href"
                        v-scroll-to="item.scrollTo"
                        
                    >
                        {{item.text}}
                    </v-btn>
                    <v-btn
                        v-else
                        class="hidden-xs-only"
                        text
                        :key="item.text"
                        :href="item.href"
                        
                    >
                        {{item.text}}
                    </v-btn>
                </template>
                <!-- <theme-switcher /> -->
            </v-toolbar-items>

        </v-app-bar>
        </v-container>

    </div>

</template>

<script>

import SearchInput from '../components/SearchInput'
import ThemeSwitcher from '../components/ThemeSwitcher'
import BrianLogo from '../components/BrianLogo'

export default {
    components: {
        SearchInput,
        ThemeSwitcher,
        BrianLogo
    },
    data(){
        return {
            drawer: null,
            menuPages: [ // either make all of them have icons or none!
                {
                    text: 'About',
                    href: '/#about',
                    scrollTo: '#about',
                },
                {
                    text: 'Projects',
                    href: '/projects',
                },
                {
                    text: 'Experience',
                    href: '/#experience',
                    scrollTo: '#experience',
                },
                {
                    text: 'Contact',
                    href: 'mailto:briancarlson6174@gmail.com',
                    
                },
            ]
        }
    }
}
</script>

<style>

  .section {
      max-width: 1400px;
      /* min-height: 1px !important; */
  }
</style>