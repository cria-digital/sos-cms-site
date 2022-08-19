module.exports = ({env}) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-digitalocean-nohash", 
      providerOptions: {
        includeHash: true, // rename files with MD5 hash
        key: env('DO_SPACE_ACCESS_KEY'),
        secret: env('DO_SPACE_SECRET_KEY'),
        endpoint: env('DO_SPACE_ENDPOINT'),
        space: env('DO_SPACE_BUCKET'),
      }
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        blogs: {
          field: 'slug',
          references: 'title',
        },
        articles: {
          field: 'slug',
          references: 'title'
        },
        posts: {
          field: 'slug',
          references: 'title'
        }
      },
    },
  },
  'generate-data': {
        enabled: true,
    },
    'editorjs': {
      enabled: true,
      resolve: './src/plugins/strapi-plugin-react-editorjs'
    }

})
