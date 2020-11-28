<template>
  <div class="component p-1">
    <div class="p-1">
      <h3>1. 全局 loading</h3>
      <div class="p-1">
        <comp-a></comp-a>
        <comp-b></comp-b>
        <div>loading count: {{ loadingCount }}</div>
        <div>loading: {{ loading }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CompA from '../components/CompA'
import CompB from '../components/CompB'
export default {
  name: 'Vuex',
  components: {
    CompA,
    CompB,
  },
  computed: {
    ...mapState('loading', ['loadingCount']),
    ...mapGetters('loading', ['loading']),
  },
  watch: {
    loading: {
      handler() {
        if (this.loading) {
          this.$toast.loading({ duration: 0 })
        } else {
          this.$toast.clear()
        }
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    this.$toast.clear()
  },
}
</script>
