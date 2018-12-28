<template>
    <div>
        <ul>
            <li v-for="item in processedItems" :key="item">{{ item }}</li>
        </ul>
        {{ val }} <button @click="val += 2">plus 2</button>
    </div>
</template>

<script>
export default {
    data() {
        return { items: [1, 2, 3, 4, 5], val: 5 };
    },

    computed: {
        processedItems() {
            return this.items.map(this.processData);
        }
    },

    methods: {
        processData(item) {
            return Math.sin(item) + Math.asinh(item);
        }
    }
}
</script>
