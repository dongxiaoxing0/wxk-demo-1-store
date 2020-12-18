<template>
  <van-tabbar v-model="tabBarActive" placeholder @change="onChange">
    <van-tabbar-item icon="wap-home"> 店铺首页</van-tabbar-item>
    <van-tabbar-item icon="search">全部商品</van-tabbar-item>
    <van-tabbar-item icon="bars">店铺分类</van-tabbar-item>
    <van-tabbar-item icon="manager">客服</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
    tabBarActive = 0;
    tabBarUrl = [
     '/', '/goods', '/categories', '/messages',
    ];
    mounted() {
        this.tabBarActive = this.tabBarUrl.indexOf(this.$route.path);
    }
    onChange(index: number) {
        const url = this.tabBarUrl[index];
        if (url !== this.$route.path) {
        this.$router.push(url);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>