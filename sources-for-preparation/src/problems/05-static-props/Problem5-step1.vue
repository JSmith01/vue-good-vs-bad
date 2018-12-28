<template>
    <div>{{ myData }}</div>
</template>

<script>
import dataBlock from './data.json';

export default {
    dataBlock: dataBlock,

    computed: {
        myData() {
            return this.$options.dataBlock;
        }
    }
}
</script>
