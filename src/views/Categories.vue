<template>
  <div>
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

    <main>
      <div class="swipe-wrapper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>

      <div class="list">
        <van-list :finished="finished" finished-text="没有更多了">
          <CategoriesListItem
            v-for="(item, index) in categoriesList"
            :categoriesGroup="item"
            :key="index"
          >
          </CategoriesListItem>
        </van-list>
      </div>
    </main>

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
import CategoriesListItem from '@/components/CategoriesListItem.vue';

type CategoriesGroup = {
  groupTitle: string;
  group: string[];
};

@Component({
  components: { CategoriesListItem }
}
)
export default class Categories extends Vue {
  value = '';
  tabBarActive = 0;
  categoriesList: CategoriesGroup[] = [
    {
      groupTitle: '全部商品',
      group: []
    },
    {
      groupTitle: '手机数码',
      group: ['手机', '耳机', '数据线', '充电宝']
    },
    {
      groupTitle: '手机数码',
      group: ['手机', '耳机', '数据线', '充电宝']
    },
    {
      groupTitle: '手机数码',
      group: ['手机', '耳机', '数据线', '充电宝']
    },
  ];
  tabBarUrl = [
    '/', '/goods', '/categories', '/goods',
  ];
  loading = false;
  finished = false;
  refreshing = false;

  mounted() {
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
main {
  background-color: #fafafa;
  .list {
    padding: 10px;
  }
}
</style>