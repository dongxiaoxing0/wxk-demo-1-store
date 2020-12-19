<template>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component,Prop } from 'vue-property-decorator';

    @Component
    export default class TopNav extends Vue {
        @Prop(String)title!: string
        onClickLeft() {
            this.$router.back();
        }
    }
</script>

<style scoped>

</style>