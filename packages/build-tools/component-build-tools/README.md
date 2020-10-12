<h2 align="center">
  @cyber-tools/component-build-tools
</h2>
<div align="center">
  基于gulp babel typescript开发的组件库构筑工具
</div>
<h2 align="center">快速开始</h2>

```bash
npm install @cyber-tools/component-build-tools -g
```
<h2 align="center">
  这个工具解决了什么问题
</h2>
<div>
  一个标准的组件库应该具备以下优点:
  1.应该css-modules,file依赖等依赖全部集成好,而不是让使用者用插件进行集成
  2.每个组件类之间都应该是独立的commonjs模块,可以不借助插件进行按需引入
</div>

<h2 align="center">
  设计思路
</h2>

<div>
  先用gulp-typescript将typescript编译成js,然后再用gulp-babel解决js中的构筑问题
</div>