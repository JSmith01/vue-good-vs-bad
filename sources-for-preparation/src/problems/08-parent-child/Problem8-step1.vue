<template>
    <div>
        <Child :test.sync="my"/>
    </div>
</template>

<script>
import Child from './Child-step1.vue';

export default {
    components: { Child },

    data() {
        return { my: { val: 5 } };
    }
}
</script>
