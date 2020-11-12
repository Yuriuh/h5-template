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
    <!-- <div class="p-1">
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
    </div> -->

    <div class="flex px-1">
      <div id="mse"></div>
    </div>
  </div>
</template>

<script>
import { Button, Toast } from 'vant'
// import FetchData from '@/components/FetchData'
import Player from 'xgplayer'
import video from '../assets/test.mp4'
export default {
  components: {
    [Button.name]: Button,
    // FetchData,
  },
  data() {
    return {
      Toast,
      url: 'https://jsonplaceholder.typicode.com/posts/1',
    }
  },
  mounted() {
    let player = new Player({
      id: 'mse',
      url: video,
      fluid: true,
      autoplay: true,
      loop: true,
      fitVideoSize: 'auto',
      ignores: ['time', 'progress'],
    })
  },
}
</script>

<style lang="scss">
#mse {
  flex: auto;
  border-radius: 12px;
  > video {
    border-radius: 12px;
  }
  > .xgplayer-controls {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
}
</style>
