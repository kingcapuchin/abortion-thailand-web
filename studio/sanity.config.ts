import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'abortion-thailand',
  title: 'Abortion Thailand CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .schemaType('blogPost')
              .child(
                S.documentList()
                  .title('Blog Posts')
                  .filter('_type == "blogPost"')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
            S.listItem()
              .title('Pages')
              .schemaType('page')
              .child(
                S.documentList()
                  .title('Pages')
                  .filter('_type == "page"')
              ),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .id('settings')
              .child(
                S.document()
                  .title('Site Settings')
                  .id('settings')
                  .schemaType('settings')
                  .documentId('settings')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})