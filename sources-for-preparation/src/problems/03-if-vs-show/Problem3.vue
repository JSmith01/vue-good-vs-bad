<template>
    <div>
        <div ref="some1" v-if="condition">My Text</div>
        <div ref="some2" v-show="condition">My Text</div>
        <button @click="condition = !condition">Toggle</button>
    </div>
</template>

<script>
export default {
    data() {
        return { condition: false };
    },

    watch: {
        condition(newVal, oldVal) {
            if (newVal && !oldVal) {
                let x = this.$refs.some1.getBoundingClientRect();
                let y = this.$refs.some2.getBoundingClientRect();
                console.log(x, y);
            }
        }
    }
}
</script>
