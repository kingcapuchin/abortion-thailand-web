import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '73gs3oyp',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production_',
  },
})
