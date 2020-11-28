<template>
  <van-overlay :show="dialogVisible" :lock-scroll="false" z-index="999">
    <div class="wrapper" @click.self="handleWrapperClick">
      <div class="block">
        <div class="content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
          commodi. Numquam magnam asperiores tempora aspernatur voluptate,
          placeat possimus, provident esse quae sequi praesentium illo, impedit
          tenetur obcaecati quisquam totam ipsam! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Eum, dolorum in beatae adipisci ratione
          soluta saepe dolore cum blanditiis hic alias vero? Nesciunt ipsa amet
          quos quaerat natus sed tenetur. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. A odio sunt ratione nemo, harum eaque
          ipsam dolor earum beatae cum numquam, corporis culpa! Ut, tenetur
          molestias. Quam aliquam excepturi aspernatur.
        </div>
        <div class="close" @click="closeDialog">x</div>
      </div>
    </div>
  </van-overlay>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    closeOnOverlay: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeDialog() {
      this.$emit('update:dialogVisible', false)
    },
    handleWrapperClick() {
      if (this.closeOnOverlay) {
        this.closeDialog()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  > .block {
    position: relative;
    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      @include circle(25px);
    }
    > .content {
      width: 250px;
      height: 275px;
      padding: 12px;
      overflow-y: scroll;
      overscroll-behavior: contain;
      border-radius: 8px;
      background-color: #fff;
    }
  }
}
</style>
