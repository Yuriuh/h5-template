<template>
  <div class="home">
    <van-button>Click</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { getTodos } from '@/services/todo-service.js'
export default {
  name: 'Home',
  async mounted() {
    const res = await getTodos()
    console.log('res', res)
  },
}
</script>
