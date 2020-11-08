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
    <div class="p-1">
      <fetch-data
        :url="url"
        :toastLoading="true"
        message="loading..."
        #default="{ data }"
      >
        <div>
          <div>{{ data }}</div>
        </div>
      </fetch-data>
    </div>
  </div>
</template>

<script>
import { Button, Toast } from 'vant'
import FetchData from '@/components/FetchData'
export default {
  components: {
    [Button.name]: Button,
    FetchData,
  },
  data() {
    return {
      Toast,
      url: 'https://jsonplaceholder.typicode.com/posts/1',
    }
  },
}
</script>

<style lang="scss" scoped></style>
