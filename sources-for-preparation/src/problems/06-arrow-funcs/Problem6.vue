<template>
    <div>
        <button @click="run1">Run 1</button>
        <button @click="run2">Run 2</button>
        <button @click="run3">Run 3</button>
    </div>
</template>

<script>
export default {
    methods: {
        run1: () => {
            console.log(this);
        },

        run2() {
            console.log(this);
        },

        run3() {
            this.$nextTick(this.run1);
        }
    }
}
</script>
