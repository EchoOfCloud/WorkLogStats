const fs = require('fs');
const path = require('path');

// 必要文件列表（如果缺失会导致构建失败）
const requiredFiles = ['index.html', 'app.js', 'chart.js', 'style.css', 'README.md'];

// 可选文件列表（如果缺失会被跳过）
const optionalFiles = ['示例数据.csv'];

// 确保dist目录存在
fs.mkdirSync('dist', { recursive: true });

// 复制必要文件
requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join('dist', file));
        console.log(`Copied: ${file} -> dist/${file}`);
    } else {
        console.error(`Error: Required file not found: ${file}`);
        process.exit(1);
    }
});

// 复制可选文件（如果存在）
optionalFiles.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join('dist', file));
        console.log(`Copied: ${file} -> dist/${file}`);
    } else {
        console.log(`Skipped: ${file} (not found)`);
    }
});

console.log('Build completed successfully!');