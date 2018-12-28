<template>
    <div>
        <div>{{ authKey }}</div>
        <input type="text" v-for="i in [0, 1, 2]" v-model="fields[i]" :key="i">
        <button @click="removeAll">Remove All</button>
        <button @click="setFirst">Set First</button>
    </div>
</template>

<script>
export default {
    data() {
        return { fields: [] };
    },

    computed: {
        authKey() { return window.localStorage.getItem('authKey'); }
    },

    methods: {
        removeAll() {  this.fields.length = 0; },

        setFirst() { this.fields[0] = 100500; }
    }
}
</script>

