<template>
  <van-popup :value="visible" position="bottom" @click-overlay="close" @close="close">
    <van-datetime-picker
      type="month-day"
      title="选择年月日"
      :value="pickedDate"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
      @cancel="handleDateCancel"
      @confirm="handleDateConfirm"
    />
  </van-popup>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
    },
    pickedDate: {
      type: Date,
    },
    minDate: {
      type: Date,
    },
    maxDate: {
      type: Date,
    },
  },
  methods: {
    handleDateConfirm(value) {
      this.$emit('confirm', value)
      this.close()
    },
    handleDateCancel() {
      this.close()
    },
    close() {
      this.$emit('update:visible', false)
    },
    formatter(type, val) {
      if (type === 'month') {
        return `${val}月`
      } else if (type === 'day') {
        return `${val}日`
      }
      return val
    },
  },
}
</script>

<style lang="scss" scoped></style>
