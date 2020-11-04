<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <div class="text-gray-300">
      Tailwind css
    </div>
    <div class="flex justify-between">
      <span>left</span>
      <span>center</span>
      <span>right</span>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  components: {
    'van-button': Button,
  },
}
</script>

<style lang="scss" scoped></style>
