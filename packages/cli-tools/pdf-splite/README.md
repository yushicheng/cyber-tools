<h2 align="center">Introduction</h2>
<div align="center">用于将多页的pdf切分成单页以页面的pdf文件</div>
<h2 align="center">Install</h2>

```bash
npm install @cyber-tools/pdf-splite  -g
```

<h2 align="center">Usage</h2>

> single 命令:

指定单一pdf文件进行切分

```bash
pdf-splite single demo.pdf
```



> all 命令

深度遍历当前目录，切分所有匹配到的pdf文件

```bash
pdf-splite all
```

