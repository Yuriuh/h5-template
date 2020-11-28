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
export default {
  data() {
    return {
      routes,
      active: '',
    }
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
  font-size: 16px;
  background: #f7f8fa;
}
</style>
