<template>
  <div class="component p-1">
    <div class="p-1">
      <h3>1. 自定义 Dialog</h3>
      <div class="p-1">
        <van-button type="primary" size="mini" @click="openDialog"
          >open</van-button
        >
      </div>
      <custom-dialog :dialogVisible.sync="dialogVisible" />
    </div>

    <div class="p-1">
      <h3>2. Renderless Component</h3>
      <div class="p-1">
        <fetch-data
          :url="url"
          :toastLoading="true"
          message="loading..."
          #default="{ data }"
        >
          <div>
            <div>{{ data }}</div>
          </div>
        </fetch-data>
      </div>
    </div>

    <div class="p-1">
      <h3>3. Video Player</h3>
      <div class="p-1">
        <video-player id="video" :url="videoUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomDialog from '../components/CustomDialog'
import FetchData from '../components/FetchData'
import VideoPlayer from '../components/VideoPlayer'
export default {
  components: {
    CustomDialog,
    FetchData,
    VideoPlayer,
  },
  data() {
    return {
      dialogVisible: false,
      url: 'https://jsonplaceholder.typicode.com/posts',
      videoUrl: 'https://maumkt.ppdaicdn.com/mktop/totalloan/totalloan.mp4',
    }
  },
  methods: {
    openDialog() {
      this.dialogVisible = true
    },
  },
}
</script>
