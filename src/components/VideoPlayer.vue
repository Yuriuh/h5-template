<template>
  <div :id="id"></div>
</template>

<script>
// 引入 EventBus
import EventBus from '../utils/event-bus.js'
export default {
  props: {
    id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  mounted() {
    let player = new Player({
      id: this.id,
      url: this.url,
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
    // 监听事件
    EventBus.$on('playCurrentVideo', this.playCurrentVideo)
  },
  beforeDestroy() {
    EventBus.$off('playCurrentVideo', this.playCurrentVideo)
    this.closeVideo()
  },
  methods: {
    closeVideo() {},
    playVideo() {},
    stopVideo() {},
    playCurrentVideo(id) {
      if (this.id === id) {
        this.playVideo()
      } else {
        this.stopVideo()
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
