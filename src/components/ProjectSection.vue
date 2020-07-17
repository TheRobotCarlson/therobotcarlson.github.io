<template>
    <v-container id="projects">
        <v-row 
            dense
            align="center"
            justify="center"
        >
            <v-col class="text-left">
                <h1>Projects</h1>
                <h2 class="subheading">Here's a small list of some of the things I've made.</h2>
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
                <experience-item :experience="experience"/>
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
        fileInfo {
            directory
        }
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
import ExperienceItem from '../components/ExperienceItem';

export default {
    components: {
        ExperienceItem
    }
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