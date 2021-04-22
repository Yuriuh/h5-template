<template>
  <div class="p-1">
    <van-button type="primary" size="mini" @click="openDatePickerPopup">
      open
    </van-button>

    <date-picker-popup :visible.sync="datePickerPopupVisible" :pickedDate="date" @confirm="changeDate" />
  </div>
</template>

<script>
import DatePickerPopup from '../components/DatePickerPopup'
export default {
  components: {
    DatePickerPopup,
  },
  data() {
    return {
      datePickerPopupVisible: false,
      date: new Date(),
    }
  },
  methods: {
    openDatePickerPopup() {
      this.datePickerPopupVisible = true
    },
    changeDate(date) {
      this.date = date
    },
  },
}
</script>

<style lang="scss" scoped></style>
