<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <comp-one></comp-one>
  </div>
</template>

<script>
import CompOne from '../components/CompOne'
export default {
  components: {
    CompOne,
  },
}
</script>

<style lang="scss" scoped></style>
