<template>
  <div id="app">
    <van-tabs @change="switchRouter" v-model="active">
      <van-tab
        v-for="route in routes"
        :key="route.name"
        :name="route.name"
        :title="route.name"
      >
      </van-tab>
    </van-tabs>
    <router-view />
  </div>
</template>

<script>
import { routes } from './router'
import { getMockData } from './services/mock'
export default {
  data() {
    return {
      routes,
      active: '',
    }
  },
  async mounted() {
    const res = await getMockData()
    console.log('res', res)
  },
  watch: {
    '$route.path': {
      handler() {
        const currentRoute = this.$route
        this.active = currentRoute.name
      },
      immediate: true,
    },
  },
  methods: {
    switchRouter(name, title) {
      this.$router.push({ name: title })
    },
  },
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  font-size: 16px;
  background: #f7f8fa;
}
</style>
