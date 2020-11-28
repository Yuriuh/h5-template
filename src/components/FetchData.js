import { post } from '../utils/request';
import { Toast } from 'vant';

export default {
    name: 'FetchData',
    props: {
        url: {
            type: String,
            default: ''
        },
        toastLoading: {
            type: Boolean,
            default: false
        },
        message: {
            type: String,
            default: ''
        }
    },
    async created() {
        this.toastLoading && this.startLoading();
        this.data = await this.fetchData();
        this.toastLoading && this.stopLoading();
        this.loading = false;
    },
    data() {
        return {
            loading: true,
            data: null
        };
    },
    methods: {
        fetchData() {
            return post(this.url);
        },
        startLoading() {
            Toast.loading({
                message: this.message
            });
        },
        stopLoading() {
            Toast.clear();
        }
    },
    render() {
        return this.$scopedSlots.default({
            loading: this.loading,
            data: this.data
        });
    }
};
