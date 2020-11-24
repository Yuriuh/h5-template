<template>
  <div class="home">
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import { getTodos } from '@/services/todo-service.js'
export default {
  name: 'Home',
  data() {
    return {
      active: 1,
    }
  },
  async mounted() {
    const res = await getTodos()
    console.log('res', res)
  },
}
</script>
