<h2 align="center">Introduction</h2>
<div align="center">
  基于<a href="https://cloud.tencent.com/document/sdk/Node.js">腾讯云openAPI</a>开发,
  该工具的主要功能是将项目的图片上传到腾讯云并且在原目录下形成一个json记录,后期项目维护的时候可以根据这个json文件进行图片的引用和下载,相当于一个图片的管理工具,特别适用于icon等多图文件
</div>
<img src="https://cyber-files-1259190979.cos.ap-shanghai.myqcloud.com/d87c6d77-59d3-44f3-b999-58e377399237.gif"/>
<h2 align="center">Install</h2>

```bash
npm install @cyber-tools/cyber-cdn -g
```

<h2 align="center">Usage</h2>

创建配置文件:
```bash
cyber-cdn init
```

登录到腾讯云:
```bash
cyber-cdn login
```

登出腾讯云:
```bash
cyber-cdn logout
```

查看并打开登录信息:
```bash
cyber-cdn view
```

上传文件中所有符合条件的文件(递归模式),并生成一个file.oss.json的记录:
```bash
cyber-cdn upload
```
清空file.oss.json并刷新上传记录(适用于文件改动):
```bash
cyber-cdn refresh
```

更具file.oss.json文件下载文件到每个目录下:
```bash
cyber-cdn download
```


