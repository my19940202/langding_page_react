# 用来处理编译出的js ie78不支持的情况
echo "fix ie78 problem"
sed "s/default:/'default':/g" build/imgs.js > build/imgs.js.tmp
sed "s/\.default/['default']/g" build/imgs.js.tmp > build/imgs.js

sed "s/default:/'default':/g" build/titleTop.js > build/titleTop.js.tmp
sed "s/\.default/['default']/g" build/titleTop.js.tmp > build/titleTop.js
rm build/*.tmp
echo "done"
