<template>
  <div class="directives">
    <div class="p-1">
      <h3>1. Click outside</h3>
      <div class="p-1">
        <van-button
          type="primary"
          size="mini"
          v-click-outside="handleClickOutside"
        >
          click outside
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickOutside() {
      console.log('click outside')
    },
  },
}
</script>

<style lang="scss" scoped></style>
