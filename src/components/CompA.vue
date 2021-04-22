<template>
    <div>Component A</div>
</template>

<script>
import { mapMutations } from 'vuex';
import { sleep } from '../utils/sleep';
export default {
    async mounted() {
        this.INCREASE_LOADING();
        await sleep(1000);
        this.DECREASE_LOADING();
    },
    methods: {
        ...mapMutations('loading', ['INCREASE_LOADING', 'DECREASE_LOADING']),
    },
};
</script>