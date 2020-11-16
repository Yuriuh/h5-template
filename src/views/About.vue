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

    <van-swipe
      class="my-swipe"
      indicator-color="white"
      @change="handleSwipeChange"
    >
      <van-swipe-item v-for="(item, index) in list" :key="index">
        <video-player :url="item.url" :id="'video' + index" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Button, Toast } from 'vant'
import video from '../assets/test.mp4'
import video2 from '../assets/test2.mp4'
import VideoPlayer from '../components/VideoPlayer'
import EventBus from '../utils/event-bus'
export default {
  components: {
    [Button.name]: Button,
    VideoPlayer,
  },
  data() {
    return {
      Toast,
      video,
      video2,
      list: [{ url: video }, { url: video2 }],
    }
  },
  mounted() {
    this.$nextTick(() => {
      EventBus.$emit('playCurrentVideo', 'video1')
    })
  },
  methods: {
    handleSwipeChange(index) {
      const id = 'video' + index
      EventBus.$emit('playCurrentVideo', id)
    },
  },
}
</script>

<style lang="scss"></style>
