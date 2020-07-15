<template>
    <v-container id="projects">
        <v-row 
            dense
            align="center"
            justify="center"
        >
            <v-col class="text-left">
                <h1>Projects</h1>
                <h2 class="subheading">Here's a small list of some of the things I've done.</h2>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row 
            dense
            align="stretch"
            align-content="stretch"
            class="my-auto"
        >
            <v-col
                v-for="(experience) in $static.experiences.edges" :key="experience.id"
                cols="12"
                sm="4"
                align-self="stretch"
                class="d-flex"
            >
            
                <v-hover
                    v-slot:default="{ hover }"
                    close-delay="100"
                >
          
                <v-card
                    :class="$vuetify.theme.dark? hover ? 'light-elevation-16' : '' : hover ? 'elevation-24': 'elevation-2'"
                    class="transition-swing d-flex flex-column"
                >
                    <v-card-title><g-link style="color: inherit;" class="g-link" :to="experience.node.path">{{experience.node.title}}</g-link></v-card-title>
                    <v-card-text v-html="experience.node.excerpt"></v-card-text>
                    <v-spacer></v-spacer>

                    <v-card-text>
                        <v-chip-group :show-arrows="false">
                            <v-chip
                                v-for="tag in experience.node.tags"
                                :key="tag.id"
                                :to="tag.path"
                            >
                                {{tag.title}}
                            </v-chip>
                        </v-chip-group>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            text
                            :to="experience.node.path"
                        >
                            Learn More
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn 
                            v-if="experience.node.github" 
                            :href="experience.node.github"
                            target="_blank"
                            icon 
                        >
                            <v-icon>$vuetify.icons.github</v-icon>
                        </v-btn>
                        <v-btn 
                            v-if="experience.node.website"
                            :href="experience.node.website"
                            target="_blank"
                            icon
                        >
                            <v-icon>$vuetify.icons.website</v-icon>
                        </v-btn>
                        <v-btn 
                            v-if="experience.node.devpost"
                            :href="experience.node.devpost"
                            target="_blank"
                            icon
                        >
                            <v-icon>$vuetify.icons.devpost</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn
                    text
                    href="/projects"
                >
                    <h2> See all projects </h2>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>

</template>

<static-query>
query Experience {
  experiences: allExperience (sortBy: "top", order: DESC, limit: 6, filter: { fileInfo: {directory: {in: ["projects"]}}}) {
    edges {
      node {
        id
        title
        path
        excerpt
        date
        top
        github
        devpost
        tags {
            title
            path
        }
      }
    }
  }
}
</static-query>

<script>
export default {

}
</script>

<style>

.g-link {
    color: inherit; 
    text-decoration: none;
}

.light-elevation-2 {
    box-shadow: 0 3px 1px -2px rgba(255, 255, 255,.2),0 2px 2px 0 rgba(255, 255, 255,.14),0 1px 5px 0 rgba(255, 255, 255,.12)!important;
}

.light-elevation-16 {
    box-shadow: 0 8px 10px -5px rgba(255, 255, 255,.2),0 16px 24px 2px rgba(255, 255, 255,.14),0 6px 30px 5px rgba(255, 255, 255,.12);
}
.light-elevation-24 {
    box-shadow: 0 11px 15px -7px rgba(255, 255, 255, 0.2),0 24px 38px 3px rgba(255, 255, 255, 0.14),0 9px 46px 8px rgba(255, 255, 255, 0.12)!important;
}

</style>