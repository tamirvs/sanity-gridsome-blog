export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60abf32516619800d69fda3f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-4eym97qg',
                  apiId: '8c3b301b-d399-4c34-920f-f04686edb419'
                },
                {
                  buildHookId: '60abf325abcccc00ddd1326c',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-24goqnze',
                  apiId: '8a3c4e51-7a09-4514-a7b8-8d253a7ea5c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tamirvs/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-24goqnze.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
