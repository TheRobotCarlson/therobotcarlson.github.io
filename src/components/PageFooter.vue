<template>
    <v-footer
        padless
    >
        <v-container>
            <v-row align="center">
                <p class="my-0"> Copyright {{ new Date().getFullYear() }}. All rights reserved.</p>
                
                <v-spacer></v-spacer>

                <v-btn
                    v-for="item in footerItems"
                    :key="item.text"
                    class="mx-4"
                    icon
                    :href="item.href"
                    :alt="item.altText"
                    target="_blank"
                >
                    <v-icon>{{ item.icon }}</v-icon>
                </v-btn>
                <v-btn
                    href="https://devpost.com/TheRobotCarlson"
                    alt="Check out my projects on Devpost: therobotcarlson"
                    class="mx-4"
                    icon
                    target="_blank"
                >
                    <!-- I really need to learn what the heck is going on with svgs -->
                    <!-- <svg width="26" height="20" fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280.3 242" enable-background="new 0 0 280.3 242" xml:space="preserve">
                        <g id="XMLID_1_">
                            <path id="XMLID_6_" d="M133.7,76H118v90h14.7c30.9,0,45.1-18.1,45.1-45C177.8,90.9,164.9,76,133.7,76z"/>
                            <path id="XMLID_9_" d="M210.2,0H70.1L0,121l70.1,121h140.1l70.1-121L210.2,0z M132.7,195H89V47h45.8c42.1,0,73.3,20.1,73.3,74 C208.1,172.8,170.6,195,132.7,195z"/>
                        </g>
                    </svg> -->
                    <v-icon>$vuetify.icons.devpost</v-icon>
                </v-btn>
            </v-row>
        </v-container>
       
    </v-footer>
    
</template>

<script>
export default {
    data() {
        return {
            footerItems: [ // either make all of them have icons or none!
                {
                    icon: 'mdi-email',
                    href: 'mailto:briancarlson6174@gmail.com',
                    altText: 'Send me an email!',
                },
                {
                    icon: 'mdi-github',
                    href: 'https://github.com/therobotcarlson/',
                    altText: 'Follow me on Github: therobotcarlson',
                },
                {
                    icon: 'mdi-linkedin',
                    href: 'https://www.linkedin.com/in/therobotcarlson',
                    altText: 'Add me on Linkedin: therobotcarlson',
                },
    
              
            ]
        }
    }
}
</script>

<style>

</style>