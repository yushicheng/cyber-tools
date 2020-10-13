for name in $(lerna list --ignore "@cyber-tools/{preset-*,*-utils,*-build-tools}");
do
 sudo npm uninstall -g ${name};
 echo "${name}卸载成功"
done;