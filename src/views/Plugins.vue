<template>
  <div class="component p-1">
    <div class="p1">
      <h3>1. Date format</h3>
      <div class="p-1">
        <div>
          {{ date | dateFormat('YYYY/MM/DD') }}
        </div>
        <div>
          {{ date | dateFormat('YYYY-MM-DD') }}
        </div>
        <div>
          {{ date | dateFormat('L LTS') }}
        </div>
        <div>
          {{ date | dateFormat('LL LTS') }}
        </div>
      </div>
    </div>

    <div class="p-1">
      <h3>2. Currency format</h3>
      <div class="p-1">
        <div>
          {{ 123456789 | currencyFormat(false) }}
        </div>
        <div>
          {{ 123456789 | currencyFormat }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plugins',
  data() {
    return {
      date: null,
      money: 123456789,
    }
  },
  mounted() {
    this.date = new Date()
  },
}
</script>
