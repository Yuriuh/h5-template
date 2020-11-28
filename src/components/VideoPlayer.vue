<template>
    <div :id="id"></div>
</template>

<script>
import Player from 'xgplayer';
export default {
    props: {
        id: {
            type: String,
        },
        url: {
            type: String,
        },
        poster: {
            type: String,
        },
    },
    data() {
        return {
            player: {},
        };
    },
    mounted() {
        this.player = new Player({
            id: this.id,
            url: this.url,
            poster: this.poster,
            autoplay: true,
            playsinline: true,
            loop: true,
            fluid: true,
            // height: 262,
            muted: true,
            // closeVideoPreventDefault: true,
            // closeVideoStopPropagation: true,
            // closeVideoClick: true,
            // closeVideoTouch: true,
            // inactive: 3000,
        });
    },
    beforeDestroy() {
        this.destroyVideo();
    },
    methods: {
        playVideo() {
            this.player.play();
        },
        pauseVideo() {
            this.player.pause();
        },
        destroyVideo() {
            this.player && typeof this.player.destroy === 'function' && this.player.destroy();
        },
    },
};
</script>