<template>
    <div class="productItem">
        <van-image :height="imgHeight" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span v-if="!hideName">{{productItem.name}}</span>
        <span v-if="hasPrice" class="price">￥{{productItem.price}}</span>
        <span v-if="hasHotSaleTag" class="tag">{{productItem.hotSaleTag}}</span>
        <span v-if="hasRewardsPoints" class="rewards">{{productItem.rewards}}积分</span>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component,Prop } from 'vue-property-decorator';

    @Component
    export default class ProductDisplay extends Vue {
        @Prop()productItem!: ProductItem
        @Prop(Number)imgHeight!: number
        @Prop(Boolean)hideName?: boolean
        @Prop(Boolean)hasPrice?: boolean
        @Prop(Boolean)hasRewardsPoints?: boolean
        @Prop(Boolean)hasHotSaleTag?: boolean
        @Prop(Boolean)hotSaleTag?: string
    }
</script>

<style lang="scss" scoped>
  .productItem {
      > span {
        display: block;
        padding-left: 4px;
        padding-top: 2%;
        padding-bottom: 2%;
        font-size: inherit;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      > .price{
        color: red;
      }
      >.rewards{
        color: red;
        text-align: center;
      }
      > .tag{
        background-color: red;
        color: white;
        border-radius: 15px;
        white-space: nowrap;
        text-align: center;
      }
  }
</style>