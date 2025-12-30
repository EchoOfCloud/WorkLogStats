// 构建脚本 - 复制静态文件到dist目录
const fs = require('fs');
const path = require('path');

const distDir = 'dist';
const filesToCopy = ['index.html', 'style.css', 'app.js', 'chart.js'];

// 创建dist目录（如果不存在）
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
  console.log(`创建目录: ${distDir}`);
}

// 复制文件
filesToCopy.forEach(file => {
  const srcPath = file;
  const destPath = path.join(distDir, file);
  
  fs.copyFileSync(srcPath, destPath);
  console.log(`复制文件: ${srcPath} -> ${destPath}`);
});

console.log('构建完成！');
