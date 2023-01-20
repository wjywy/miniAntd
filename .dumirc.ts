import { defineConfig } from 'dumi';
import * as path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  title: 'library',
  themeConfig: {
    name: 'library',
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
  },
  base: '/library',
  publicPath: '/',
  exportStatic: {},
  alias: {
    library: path.resolve(__dirname, 'src'),
  },
});
