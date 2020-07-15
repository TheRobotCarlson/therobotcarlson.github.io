// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Brian Carlson',
  siteDescription: 'therobotcarlson\'s website',
  siteUrl: 'www.therobotcarlson.com',
  test: "works",
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
  plugins: [
 
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'src/assets/images/**/*.jpg'
    //   }
    // },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'projects/**/*.md',
    //     typeName: 'Project',
    //     refs: {
    //       tags: {
    //         typeName: 'Tag',
    //         create: true
    //       }
    //     }
    //   }
    // },

    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Experience', // Required
        baseDir: './experiences',
        path: 'experiences/**/*.md', // Where .md files are located
        // pathPrefix: '/projects', // Add route prefix. Optional
        template: './src/templates/Experience.vue', // Optional
        route: '/experiences/:title',
        plugins: [
          [ 'gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: false } ]
        ],
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    // {
    //   use: '@gridsome/vue-remark',
    //   options: {
    //     typeName: 'Blog', // Required
    //     baseDir: './blog', // Where .md files are located
    //     pathPrefix: '/blog', // Add route prefix. Optional
    //     template: "./src/templates/Post.vue",
    //     plugins: [
    //       [ 'gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: false } ]
    //     ],
    //     refs: {
    //       tags: {
    //         typeName: 'Tag',
    //         create: true
    //       }
    //     }
    //   }
    // },
    // {
    //   use: 'gridsome-plugin-rss',
    //   options: {
    //     contentTypeName: 'Post',
    //     feedOptions: {
    //       title: 'Brian Carlson\'s Blog',
    //       feed_url: 'http://localhost:8080/rss.xml',
    //       site_url: 'http://localhost:8080/'
    //     },
    //     feedItemOptions: node => ({
    //       title: node.title,
    //       description: node.summary,
    //       url: 'http://localhost:8080' + node.path,
    //       author: 'Brian Carlson',
    //       date: node.date
    //     }),
    //     output: {
    //       dir: './static',
    //       name: 'rss.xml'
    //     }
    //   }
    // },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  templates: {
    Tag: '/tag/:id'
  },
  // transformers: {
  //   remark: {
  //     plugins: [
  //       [ 'gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: true } ]
  //     ],
  //     externalLinksTarget: '_blank',
  //     externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
  //     anchorClassName: 'icon icon-link',
  //   }
  // },
}
