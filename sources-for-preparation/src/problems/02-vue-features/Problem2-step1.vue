
<template>
    <div id="charts"></div>
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
                    const chartsEl = document.getElementById('charts');

                    new Chartist(chartsEl, data);
                });
            });
    }
}
</script>

