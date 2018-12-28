<template>
    <div id="app">
        <button @click="visible = !visible" class="hide">+</button>
        <div id="nav" v-if="visible">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/problem1">01 - Reactivity</Link>
            <Link to="/problem2">02 - Vue features: refs & lifecycle</Link>
            <Link to="/problem3">03 - v-if VS v-show</Link>
            <Link to="/problem4">04 - timers & event listeners</Link>
            <Link to="/problem5">05 - static props</Link>
            <Link to="/problem6">06 - arrow funcs</Link>
            <Link to="/problem7">07 - expensive reactivity</Link>
            <Link to="/problem8">08 - parent-child</Link>
            <Link to="/problem8-s">08 - parent-child (solution)</Link>
            <Link to="/problem9">09 - $root & $parent</Link>
            <Link to="/problem10">10 - mixins</Link>
        </div>
        <router-view/>
    </div>
</template>

<script>
import Link from './Link.vue';

export default {
    components: { Link },

    data() { return { visible: true } }
}
</script>

<style scoped>
    .hide {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 10px;
    }

    #app {
        font-size: 20px;
    }
    #app input {
        font-size: 20px;
    }
</style>