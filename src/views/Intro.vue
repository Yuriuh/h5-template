<template>
  <div class="home p-1">
    <div class="mt-1">
      <h5>简介</h5>
      <div class="mt-1 fz-14">这是一个活动页的模板</div>
    </div>
    <div class="mt-1">
      <h3>特点</h3>
      <ul class="lh-1-5 fz-14 mt-1">
        <li>1. 使用 Vant 作为基础组件库</li>
        <li>2. SCSS uitility classes</li>
        <li>3. 二次封装一些常用组件</li>
      </ul>
    </div>
    <div class="mt-1">
      <h3>使用</h3>
      <div class="mt-1">
        <code class="fz-14">npm run create:template --dirname=xxx</code>
      </div>
    </div>
    <div class="mt-1">
      <h3>配置</h3>
      <div class="mt-1">
        <div class="fz-14">
          修改 package.json 里面的 config 里面的 from_path 和 to_path
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
}
</script>
