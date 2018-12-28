<template>
    <div>{{ myData }}</div>
</template>

<script>
import VueNonreactive from 'vue-nonreactive';
import Vue from 'vue';
Vue.use(VueNonreactive);

import dataBlock from './data.json';

export default {
    data() {
        return {
            myData: Vue.nonreactive(dataBlock)
        };
    }
}
</script>
