<template>
    <div>
        <Child :test="my"/>
    </div>
</template>

<script>
import Child from './Child.vue';

export default {
    components: { Child },

    data() {
        return { my: { val: 5 } };
    }
}
</script>
