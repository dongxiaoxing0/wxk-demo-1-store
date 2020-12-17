<template>
  <div class="goods">
    <van-nav-bar
      title="坚果旗舰店"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      shape="round"
      right-icon="search"
      left-icon="-"
    />

    <div class="swipe-wrapper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>

    <van-row type="flex" justify="center">
      <van-col span="12">
        <ul class="productList secondCol">          
          <li v-for="(item,index) in productList" :key="index">
            <ProductDisplay :productItem="item" ></ProductDisplay>
          </li>
        </ul>
      </van-col>
      <van-col span="12">
        <ul class="productList secondCol">          
          <li v-for="(item,index) in productList" :key="index">
            <ProductDisplay :productItem="item" ></ProductDisplay>
          </li>
        </ul>
      </van-col>
    </van-row>

    <van-tabbar v-model="tabBarActive" placeholder @change="onChange">
      <van-tabbar-item icon="wap-home"> 店铺首页</van-tabbar-item>
      <van-tabbar-item icon="search">全部商品</van-tabbar-item>
      <van-tabbar-item icon="bars">店铺分类</van-tabbar-item>
      <van-tabbar-item icon="manager">客服</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Goods extends Vue {
  value = '';
  tabBarActive = 0;
  tabBarUrl = [
    '/', '/goods', 'categories', '/goods',
  ];
  productList: ProductItem[] = [
    
    {
      name: '坚果 三脚架',
      price: 69.00,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
      imgHeight: '150',
    },
    {
      name: '坚果 三脚架',
      price: 69.00,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
      imgHeight: '150',
    },
    {
      name: '坚果 三脚架',
      price: 69.00,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
      imgHeight: '150',
    },
  ]
  mounted(){
    this.tabBarActive = this.tabBarUrl.indexOf(this.$route.path);
  }
  onClickLeft() {
    this.$router.back();
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
.productList {
  > li {
    margin:10px;
    width: calc(100% - 20px);
  }
}
</style>
