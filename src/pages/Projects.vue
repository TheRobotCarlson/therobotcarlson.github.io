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
                <experience-item :experience="experience"/>
               
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
</page-query>

<script>

import ExperienceItem from '../components/ExperienceItem';

export default {
    metaInfo: {
        title: 'Projects'
    },
    components: {
        ExperienceItem
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

                // console.log(this.selected)
            if (!search) return this.tags;

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

        var tag = undefined;
        if(this.$route.query.length != 0){
            tag = this.$route.query.tag;
            // this.selected.push({title: tag, path: `/tag/${tag}/`})
        }
        var allExperiences = this.$page.experiences.edges;
        var tagList = [];
        // this.experiences = allExperiences;

        for(var i=0; i < allExperiences.length; i++){
            var experience = allExperiences[i].node;
            var tags = experience.tags;
            for(var j=0; j < tags.length; j++){
                if(this.tags.map((obj) => obj.title).indexOf(tags[j].title) == -1){
                    this.tags.push(tags[j]);

                    if(tag != undefined && tag == tags[j].title){
                        this.selected.push(tags[j]);
                    }
                    // console.log(tags[j])
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