import { axios } from '@/utils/request'
import { Toast } from 'vant'

export default {
  name: 'FetchData',
  props: {
    url: {
      type: String,
      default: 'https://jsonplaceholder.typicode.com/todos/1',
    },
    toastLoading: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
  },
  async created() {
    this.toastLoading ? this.startLoading() : ''
    await this.sleep(2000)
    this.data = await this.fetchData()
    this.toastLoading ? this.stopLoading() : ''
    this.loading = false
  },
  data() {
    return {
      loading: true,
      data: null,
    }
  },
  methods: {
    async fetchData() {
      const data = await axios.get(this.url)
      return data
    },
    sleep(duration) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
      })
    },
    startLoading() {
      Toast.loading({
        message: this.message,
      })
    },
    stopLoading() {
      Toast.clear()
    },
  },
  render() {
    return this.$scopedSlots.default({
      loading: this.loading,
      data: this.data,
    })
  },
}
