<template>
    <div>{{ myData }}</div>
</template>

<script>
import dataBlock from './data.json';

export default {
    computed: {
        myData() {
            return dataBlock;
        }
    }
}
</script>
