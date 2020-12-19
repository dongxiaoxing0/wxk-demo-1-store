<template>
  <div>
    <TopNav title='坚果旗舰店'></TopNav>
    <main>
      <ShopItroductionBar></ShopItroductionBar>
      <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" right-icon="search" left-icon="-"/>
      <div class="swipe-wrapper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>
      <div class="newProducts">
        <h2>新品推荐</h2>
        <van-row type="flex" gutter="5">
          <van-col span="8">
            <div class="newProduct-wrapper">
              <ProductDisplay :productItem="productList[0]" :imgHeight="imgHeight[0]" hasPrice></ProductDisplay>
            </div>
          </van-col>
          <van-col class="" span="16">
            <van-row type="flex" gutter="5">
              <van-col span="8" v-for="(item,index) in productList.slice(0,3)" :key="index">
                <div class="newProduct-wrapper">
                  <ProductDisplay :productItem="item" :imgHeight="imgHeight[1]" hasPrice></ProductDisplay>
                </div>
              </van-col>
            </van-row>

            <van-row type="flex" gutter="5">
              <van-col span="8" v-for="(item,index) in productList.slice(0,3)" :key="index">
                <div class="newProduct-wrapper">
                  <ProductDisplay :productItem="item" :imgHeight="imgHeight[1]" hasPrice></ProductDisplay>
                </div>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </div>

      <div class="hotSales-wrapper">
        <div class="hotSales">
          <h2>热卖排行</h2>
          <van-row type="flex" gutter="5">
            <van-col span="6" v-for="(item,index) in productList.slice(0,4)" :key="index">
              <ProductDisplay :productItem="item" :imgHeight="imgHeight[1]" hasRewardsPoints hideName></ProductDisplay>
            </van-col>
          </van-row>
          <van-row type="flex" gutter="5">
            <van-col span="6" v-for="(item,index) in productList.slice(0,4)" :key="index">
              <ProductDisplay :productItem="item" :imgHeight="imgHeight[1]" hasRewardsPoints hasHotSaleTag hideName></ProductDisplay>
            </van-col>
          </van-row>
        </div>
      </div>

      <div class="recommend">
        <van-tabs v-model="tabActive">
          <van-tab title="推荐商品">
            <van-row type="flex" justify="center">
              <van-col span="12">
                <ul class="productList secondCol">          
                  <li v-for="(item,index) in productList" :key="index">
                    <ProductDisplay :productItem="item" :imgHeight="imgHeight[3]" hasPrice></ProductDisplay>
                  </li>
                </ul>
              </van-col>
              <van-col span="12">
                <ul class="productList secondCol">          
                  <li v-for="(item,index) in productList" :key="index">
                    <ProductDisplay :productItem="item" :imgHeight="imgHeight[2]" hasPrice></ProductDisplay>
                  </li>
                </ul>
              </van-col>
            </van-row>
          </van-tab>
          <van-tab title="附近店铺">内容 2</van-tab>
        </van-tabs>
      </div>
    </main>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Toast } from 'vant';
import ShopItroductionBar from '@/components/ShopIntroductionBar.vue';


@Component({
  components:{ ShopItroductionBar }
})
export default class Home extends Vue {
  tabActive = 0;
  value = '';
    productList: ProductItem[] = [
    
    {
      name: '坚果 三脚架',
      price: 69.00,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
      rewards:235,
      hotSaleTag:'爆卖1325件',
    },
    {
      name: '坚果 三脚架',
      price: 69.00,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
      rewards:235,
      hotSaleTag:'爆卖1325件',
    },
    {
      name: '坚果 三脚架',
      price: 69.00,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
      rewards:235,
      hotSaleTag:'爆卖1325件',
    },
      {
      name: '坚果 三脚架',
      price: 69.00,
      src: 'https://img.yzcdn.cn/vant/cat.jpeg',
      rewards:235,
      hotSaleTag:'爆卖1325件',
    },
  ]
  imgHeight = [160,60,150,170]
}
</script>
<style lang="scss" scope>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.swipe-wrapper {
  padding: 10px;
  background-color: #fafafa;
}
.newProducts {
  padding: 10px;
  font-size: 12px;
  > h2 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .newProduct-wrapper{
    border-radius: 6px;
    overflow: hidden;
    background-color: #fafafa;
  }
}
.hotSales-wrapper {
  padding: 20px 10px;
  background-color: #fafafa;
  .hotSales {
    border-radius: 10px;
    padding: 10px;
    font-size:12px;
    h2 {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
}
.recommend {
  .productList {
    > li {
      margin: 10px;
      width: calc(100% - 20px);
      font-size:12px;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
      }
  }
}
</style>