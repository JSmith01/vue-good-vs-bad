<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item">{{ this.processData(item) }}</li>
        </ul>
        {{ val }} <button @click="val += 2">plus 2</button>
    </div>
</template>

<script>
export default {
    data() {
        return { items: [1, 2, 3, 4, 5], val: 5 };
    },

    methods: {
        processData(item) {
            return Math.sin(item) + Math.asinh(item);
        }
    }
}
</script>
