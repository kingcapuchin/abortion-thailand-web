import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'abortion-thailand',
  title: 'Abortion Thailand CMS',
  projectId: '73gs3oyp',
  dataset: 'production_',
  plugins: [
    structureTool(),
    visionTool(),
  ],
})
