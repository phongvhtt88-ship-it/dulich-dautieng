import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Cổng Quản Trị Du Lịch & OCOP Địa Phương',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your_project_id',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
