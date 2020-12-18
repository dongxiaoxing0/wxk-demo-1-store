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
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CategoriesListItem from '@/components/CategoriesListItem.vue';

// type CategoriesGroup = {
//   groupTitle: string;
//   group: string[];
// };

@Component({
  components: { CategoriesListItem }
})
export default class Categories extends Vue {
  value = '';
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
  loading = false;
  finished = false;
  refreshing = false;
  onClickLeft() {
    this.$router.back();
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