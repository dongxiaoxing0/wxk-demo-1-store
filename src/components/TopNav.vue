<template>
    <van-nav-bar title="坚果旗舰店" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class TopNav extends Vue {
    onClickLeft() {
        this.$router.back();
    }
    }
</script>

<style scoped>

</style>