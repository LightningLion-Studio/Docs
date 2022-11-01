yarn docs:build
echo "正在清除Docs..."
rm -rf docs/*
echo "清除完成"
echo "正在拷贝文件..."
cp -r package/.vitepress/dist/* docs
echo "拷贝完成"
echo "执行完成 请部署到GitHub Pages"