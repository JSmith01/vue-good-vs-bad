<template>
    <div>
        <div>{{ authKey }}</div>
    </div>
</template>

<script>
export default {
    computed: {
        authKey() { return window.localStorage.getItem('authKey'); }
    },
}
</script>
