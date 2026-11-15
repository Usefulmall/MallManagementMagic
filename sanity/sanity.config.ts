import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'usefulmall',
  title: 'UsefulMall',
  projectId: 'i4dmtw14',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
