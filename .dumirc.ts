import { defineConfig } from 'dumi';
import * as path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  title: 'cheesi',
  themeConfig: {
    name: 'cheesi',
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
  },
  base: '/cheesi',
  publicPath: '/',
  exportStatic: {},
  alias: {
    cheesi: path.resolve(__dirname, 'src'),
  },
});
