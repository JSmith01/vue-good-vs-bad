<template>
    <div>{{ counter }}</div>
</template>

<script>
export default {
    data() {
        return { counter: 0 };
    },

    created() {
        this.myInterval = setInterval(this.periodic, 1000);
    },

    beforeDestroy() {
        clearInterval(this.myInterval);
    },

    methods: {
        periodic() {
            this.counter++;
        }
    }
}
</script>
