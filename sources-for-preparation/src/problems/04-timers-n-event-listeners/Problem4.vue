<template>
    <div>{{ counter }}</div>
</template>

<script>
export default {
    data() {
        return { counter: 0 };
    },

    created() {
        setInterval(this.periodic, 1000);
    },

    methods: {
        periodic() {
            this.counter++;
        }
    }
}
</script>
