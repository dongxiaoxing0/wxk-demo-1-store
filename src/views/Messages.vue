<template>
    <div>
        <TopNav></TopNav>
        <van-tabs v-model="tabActive">
          <van-tab title="未读消息">
          </van-tab>
          <van-tab title="全部消息">内容 2</van-tab>
        </van-tabs>
        <Nav></Nav>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Messages extends Vue {
        tabActive = 0
        onClickLeft() {
            this.$router.back();
        }
    }
</script>

<style scoped>

</style>