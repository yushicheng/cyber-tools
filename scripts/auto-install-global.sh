for path in $(lerna list --parseable --ignore "@cyber-tools/{preset-*,*-utils,*-build-tools}");
do
 sudo npm install -g file://$path;
 echo "${path}安装成功"
done;