
<template>
    <div ref="charts"></div>
</template>

<script>
import Chartist from 'chartist';
import axios from 'axios';

export default {
    created() {
        axios.get('http://localhost/data.json')
            .then(r => r.json())
            .then(data => {
                this.$nextTick(() => {
                    this.chartist = new Chartist(this.$refs.charts, data);
                });
            });
    },

    beforeDestroy() {
        this.chartist.detach();
    }
}
</script>

