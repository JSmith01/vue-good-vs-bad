<template>
    <div>{{ myData }}</div>
</template>

<script>
import dataBlock from './data.json';

export default {
    data() {
        return { myData: dataBlock };
    }
}
</script>
