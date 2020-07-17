<template>
  <Layout>
    <v-container class="section">
      <div class="container-inner mx-auto my-16">
        <h2 class="text-4xl font-bold mb-8 border-b">Experiences with: {{ $page.tag.title | capitalize }} ({{ $page.tag.belongsTo.totalCount }})</h2>
        
        <v-row 
          dense
          align="stretch"
          align-content="stretch"
          class="my-auto"
        >
          <v-col
            v-for="(experience) in $page.tag.belongsTo.edges" :key="experience.id"
            cols="12"
            sm="4"
            align-self="stretch"
            class="d-flex"
          >
            <experience-item :experience="experience"/>
                
          </v-col>
        </v-row>

<!-- 
        <div v-for="post in $page.tag.belongsTo.edges" :key="post.node.id" class="post border-gray-400 border-b mb-12">
          <h2 class="text-3xl font-bold"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h2>
          <div class="text-copy-secondary mb-4">
            <span>{{ post.node.date }}</span>
          </div>

          <div class="text-lg mb-4">
            {{ post.node.excerpt }}
          </div>

          <div class="mb-8">
            <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
          </div>
        </div> -->

        <pagination-posts
          v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
          :base="`/tag/${$page.tag.title}`"
          :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
          :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
        />
      </div>
    </v-container>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 20) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Experience {
            id
            title
            path
            company
            position
            excerpt
            subtitle
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
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'
import ExperienceItem from '../components/ExperienceItem'

export default {
  metaInfo() {
    return {
      title: 'Tag: ' + this.$page.tag.title
    }
  },
  components: {
    PaginationPosts,
    ExperienceItem
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
}
</script>
