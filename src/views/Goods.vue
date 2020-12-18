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
            <ProductDisplay :productItem="item" :imgHeight="170" hasPrice></ProductDisplay>
          </li>
        </ul>
      </van-col>
      <van-col span="12">
        <ul class="productList secondCol">          
          <li v-for="(item,index) in productList" :key="index">
            <ProductDisplay :productItem="item" :imgHeight="imgHeight" hasPrice></ProductDisplay>
          </li>
        </ul>
      </van-col>
    </van-row>

    <Nav></Nav>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Goods extends Vue {
  value = '';
  productList: ProductItem[] = [
    {
      name: '坚果 三脚架',
      price: 69.00,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
      name: '坚果 三脚架',
      price: 69.00,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
      name: '坚果 三脚架',
      price: 69.00,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
  ]
  imgHeight = 150
  onClickLeft() {
    this.$router.back();
  }
}
</script>
<style lang="scss" scoped>
.productList {
  > li {
    margin:10px;
    width: calc(100% - 20px);
    font-size: 12px;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
</style>
