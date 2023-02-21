// 编译出的js 是包括引入less的，但是用户应该先全局引入，而且tsc不会帮我们转换路径，所以在组件里就不要引入了，删掉。
import * as fs from 'fs';
import * as path from 'path';
const delete_dir = ['style', 'demos', '__tests__', 'tests', '_tests_'];
const deleteDir = (startDir: string) => {
  const dir = fs.readdirSync(startDir);
  for (let file of dir) {
    const file_path = path.resolve(startDir, file);
    const stat = fs.lstatSync(file_path);
    const isDir = stat.isDirectory();
    if (isDir) {
      deleteDir(file_path);
      fs.rmdirSync(file_path);
    } else {
      fs.unlinkSync(file_path);
    }
  }
  fs.rmdirSync(startDir);
};
const deleteLessPath = (startDir: string) => {
  const dir = fs.readdirSync(startDir);
  for (let file of dir) {
    const file_path = path.resolve(startDir, file);
    if (!fs.existsSync(file_path)) continue;
    const stat = fs.lstatSync(file_path);
    const isDir = stat.isDirectory();
    if (isDir) {
      if (delete_dir.includes(file)) {
        deleteDir(file_path);
      } else deleteLessPath(file_path);
    } else {
      if (file.includes('index')) {
        let content: string | Buffer = fs.readFileSync(file_path);
        content = content.toString().replace("import '../style';", '');
        content = content
          .toString()
          .replace("import './style/index.less';", '');
        fs.writeFileSync(file_path, content);
      }
    }
  }
};
deleteLessPath(path.resolve(__dirname, '../dist'));
