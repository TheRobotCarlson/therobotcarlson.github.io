<template>

    <v-hover
        v-slot:default="{ hover }"
        close-delay="100"
    >
        <v-card
            :class="$vuetify.theme.dark? hover ? 'light-elevation-16' : '' : hover ? 'elevation-24': 'elevation-2'"
            class="transition-swing d-flex flex-column"
        >

        
          <!-- <h1 v-if="experience.node.fileInfo.directory.includes('work')" id="title" class="text-4xl font-bold leading-tight">{{ experience.position }}</h1>
          <h1 v-if="experience.node.fileInfo.directory.includes('projects')" id="title" class="text-4xl font-bold leading-tight">{{ experience.title }}</h1> -->

            <v-card-title v-if="experience.node.fileInfo.directory.includes('work')"><g-link style="color: inherit;" class="g-link" :to="experience.node.path">{{experience.node.position}}</g-link></v-card-title>
            <v-card-title v-if="experience.node.fileInfo.directory.includes('projects')"><g-link style="color: inherit;" class="g-link" :to="experience.node.path">{{experience.node.title}}</g-link></v-card-title>
            <v-card-subtitle v-if="experience.node.fileInfo.directory.includes('work')"><h3>{{experience.node.company}}</h3></v-card-subtitle>
            
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

</template>

<script>
export default {
    props: ["experience"]
}
</script>

<style>

</style>