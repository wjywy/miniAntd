import { defineConfig } from 'dumi';
import * as path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  title: 'cheesi',
  // apiParser: {},
  themeConfig: {
    name: 'cheesi',
    logo: '/logo.png',
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
    // entryFile: './src/index.tsx', //这里是API表格解析入口
  },
  favicons: ['/logo.png'],
  // base: '/cheesi',
  // publicPath: '/',
  // exportStatic: {},
  alias: {
    cheesi: path.resolve(__dirname, 'src'),
  },
});
