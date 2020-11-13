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

    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item>
        <div id="mse"></div>
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
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
      ignores: ['time', 'progress'],
      height: 240,
      muted: true,
      closeVideoPreventDefault: true,
      closeVideoStopPropagation: true,
      closeVideoClick: true,
      closeVideoTouch: true,
    })
  },
}
</script>

<style lang="scss">
.my-swipe .van-swipe-item {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 20px;
  height: 150px;
  text-align: center;
  background: #000;
}
</style>
