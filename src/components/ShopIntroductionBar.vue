<template>
  <div class="topBar-wrapper">
    <div class="topBar">
      <div class="logo-wrapper">
        <van-button
          class="logoButton"
          round
          color="red"
          type="info"
          size="small"
        >
          坚果logo
        </van-button>
        <p>
          <span>坚果旗舰店</span>
          <span>{{ userAmount }}万人已关注</span>
        </p>
      </div>
      <van-button
        round
        plain
        :color="subscribed.likeColor"
        type="info"
        size="mini"
        @click="subscribeToggle"
      >
        <div class="like">
          <div>
            <van-icon
              :name="subscribed.heart"
              :color="subscribed.likeColor"
              size="10"
            />
          </div>
          <span>关注</span>
        </div>
      </van-button>
    </div>
    <div class="tags">
      <span>金牌商家</span>
      <span>世界五百强</span>
      <span>口碑商家</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ShopItroductionBar extends Vue {
  userAmount = 85;
  subscribeState = {
    on: {
      likeColor: 'red',
      heart: 'like'
    },
    off: {
      likeColor: '#b3b3b3',
      heart: 'like-o'
    }
  };
  subscribed = this.subscribeState.off;
  subscribeToggle(){
    if (this.subscribed === this.subscribeState.off) {
      this.subscribed = this.subscribeState.on;
    } else {
      this.subscribed = this.subscribeState.off;
    }
  }
}
</script>

<style lang="scss" scoped>
.topBar-wrapper {
  padding: 0 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ededed;
  .topBar {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-wrapper {
      display: flex;
      align-items: center;

      > p {
        padding-left: 6px;
        font-size: 12px;
        display: inline-block;
        > span {
          display: block;
        }
        > span:nth-child(2) {
          font-size: 10px;
        }
      }
    }
    .like {
      padding-top: 2px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      > span {
        padding-left: 2px;
      }
    }
  }
  .tags {
    > span {
      border: 1px solid;
      padding: 2px;
      padding-top: 4px;
      margin-left: 4px;
      font-size: 10px;
      border-radius: 2px;
    }
    > span:nth-child(1) {
      color: #fbc926;
      border-color: #fbc926;
    }
    > span:nth-child(2) {
      color: #fa5d16;
      border-color: #fa5d16;
    }
    > span:nth-child(3) {
      color: #0d6edd;
      border-color: #0d6edd;
    }
  }
}
</style>