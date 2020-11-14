<template>
  <div :id="id"></div>
</template>

<script>
// 引入 EventBus
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
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
