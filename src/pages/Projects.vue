<template>
  <Layout>
    <v-container class="section">
        <v-row>
            <v-col>
                <v-chip-group>
                    <template v-for="(item, i) in selections">
                        <v-chip outlined close @click:close="selected.splice(i, 1)" :key="item.title">{{item.title}}</v-chip>
                    </template>

                </v-chip-group>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-if="!allSelected" cols="12" class="py-0">
    <!-- <v-divider v-if="!allSelected"></v-divider> -->
                <v-text-field
                    class="py-0"
                    ref="search"
                    v-model="search"
                    full-width
                    hide-details
                    label="Search tags"
                    single-line
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-chip-group
                    v-if="!allSelected"
                >
                    <template v-for="item in categories">
                        <v-chip outlined :disabled="loading" @click="selected.push(item)" v-if="!selected.includes(item)" :key="item.title">{{item.title}}</v-chip>
                    </template>

                </v-chip-group>
            </v-col>
        </v-row>

        <v-row 
            dense
            align="stretch"
            align-content="stretch"
            class="my-auto"
        >
            <v-col
                v-for="(experience) in experiences" :key="experience.id"
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
      <!-- <div class="container-inner mx-auto py-16">
        <div v-for="experience in $page.experiences.edges" :key="experience.id" class="post border-gray-400 border-b mb-12">
          <h2 class="text-3xl font-bold"><g-link :to="experience.node.path" class="text-copy-primary">{{ experience.node.title }}</g-link></h2>

          <div class="text-lg mb-4" v-html="experience.node.excerpt"></div>

          <div class="mb-8">
            <g-link :to="experience.node.path" class="font-bold uppercase">Read More</g-link>
          </div>
        </div> 
      </div> -->
    </v-container>
  </Layout>
</template>

<page-query>
query Experience {
  experiences: allExperience (sortBy: "top", order: DESC, filter: { fileInfo: {directory: {in: ["projects"]}}}) {
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
</page-query>

<script>
export default {
    metaInfo: {
        title: 'Projects'
    },
    data(){
        return {
            selectedTags: [1, 2],
            
            tags: [],
            loading: false,
            search: '',
            selected: [],
            // categories: []
      }
    },
    computed: {
        allSelected () {
            // return this.selected.length === this.tags.length
            return false
        },
        
        selections () {
            const selections = []

            for (const selection of this.selected) {
                selections.push(selection)
            }

            return selections
        },
        categories () {
            const search = this.search.toLowerCase()

            if (!search) return this.tags

            return this.tags.filter(item => {
                const text = item.title.toLowerCase()

                return text.indexOf(search) > -1
            })
        },
        experiences (){
            var allExperiences = this.$page.experiences.edges;

            var displayExperiences = [];

            if(this.selections.length == 0){
                return allExperiences;
            }

            for(var i=0; i < allExperiences.length; i++){
                var experience = allExperiences[i].node;
                var tags = experience.tags;

                for(var j=0; j < tags.length; j++){
                    if(this.selections.map(obj => obj.title).indexOf(tags[j].title) != -1){ // if any match
                        displayExperiences.push(allExperiences[i]);        
                        break;
                    }
                }
            }


            return displayExperiences;
        }
    },

    watch: {
        selected () {
            this.search = ''
            // this.setCategories()
        },
        search () {
            // this.setCategories()
        }
    },

    methods: {
        
    },
    mounted(){
        var allExperiences = this.$page.experiences.edges;
        var tagList = [];
        // this.experiences = allExperiences;

        for(var i=0; i < allExperiences.length; i++){
            var experience = allExperiences[i].node;
            var tags = experience.tags;
            for(var j=0; j < tags.length; j++){
                if(this.tags.map((obj) => obj.title).indexOf(tags[j].title) == -1){
                    this.tags.push(tags[j]);
                    
                }
            }
        }
    }
}
</script>

<style >

.light-elevation-2 {
    box-shadow: 0 3px 1px -2px rgba(255, 255, 255,.2),0 2px 2px 0 rgba(255, 255, 255,.14),0 1px 5px 0 rgba(255, 255, 255,.12)!important;
}

.light-elevation-16 {
    box-shadow: 0 8px 10px -5px rgba(255, 255, 255,.2),0 16px 24px 2px rgba(255, 255, 255,.14),0 6px 30px 5px rgba(255, 255, 255,.12);
}
.light-elevation-24 {
    box-shadow: 0 11px 15px -7px rgba(255, 255, 255, 0.2),0 24px 38px 3px rgba(255, 255, 255, 0.14),0 9px 46px 8px rgba(255, 255, 255, 0.12)!important;
}

  .section {
      max-width: 1400px;
      min-height: 1px !important;
  }
  
</style>