<template>
    <div class="productItem">
        <van-image :height="productItem.imgHeight" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>{{productItem.name}}</span>
        <span class="price">￥{{productItem.price}}</span>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component,Prop } from 'vue-property-decorator';

    @Component
    export default class ProductDisplay extends Vue {
        @Prop()productItem!: ProductItem
    }
</script>

<style lang="scss" scoped>
  .productItem {
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
      > span {
        display: block;
        padding-left: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        font-size: 12px;
      }
      > .price{
          color: red;
      }
  }
</style>