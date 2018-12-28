<template>
    <div>
        <div>{{ authKey }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            authKey: window.localStorage.getItem('authKey')
        };
    },

    created() {
        window.addEventListener('storage', this.updateAuth);
    },

    methods: {
        updateAuth(event) {
            if (event.key === 'authKey' && this.authKey !== event.newValue) {
                this.authKey = event.newValue;
            }
        }
    }
}
</script>
