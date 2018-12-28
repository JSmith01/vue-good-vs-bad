<template>
    <input type="text" :value="test.val" @input="update('val', $event.target.value)">
</template>

<script>
export default {
    props: ['test'],

    methods: {
        update(name, value) {
            this.$emit(`update:${name}`, value)
        }
    }
}
</script>
