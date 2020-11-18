<template>
  <div :id="id" @click="handleClick"></div>
</template>

<script>
import Player from 'xgplayer'
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
  data() {
    return {
      player: {},
    }
  },
  mounted() {
    this.player = new Player({
      id: this.id,
      url: this.url,
      fluid: true,
      autoplay: true,
      loop: true,
      ignores: ['progress'],
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
    this.destroyVideo()
  },
  methods: {
    playVideo() {
      this.player.play()
    },
    pauseVideo() {
      this.player.pause()
    },
    playCurrentVideo(id) {
      if (this.id === id) {
        this.playVideo()
      } else {
        this.pauseVideo()
      }
    },
    destroyVideo() {
      this.player && this.player.destroy && this.player.destroy()
    },
    handleClick() {
      console.log('video clicked')
    },
  },
}
</script>

<style lang="scss" scoped></style>
