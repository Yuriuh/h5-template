<template>
  <div class="scss p-1">
    <ol class="list-inside list-decimal leading-normal">
      <li>Reset</li>
      <li>SCSS Variables</li>
      <li>SCSS Mixins</li>
      <li>Flexbox</li>
      <li>Box Alignment</li>
      <li>Sizing</li>
      <li>Typography</li>
    </ol>

    <div v-drag class="demo"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demo {
  width: 50px;
  height: 50px;
  background: red;
}
</style>
