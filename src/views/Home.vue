<template>
  <div>
    <van-nav-bar
      title="坚果旗舰店"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <main>
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

      <div class="newProducts">
        <h2>新品推荐</h2>
        <van-row type="flex" gutter="5">
          <van-col span="8">
            <div class="newBig">
              <van-image
                height="160"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <span>坚果 R2</span>
              <span>￥4499.00</span>
            </div>
          </van-col>

          <van-col class="" span="16">
            <van-row type="flex" gutter="5">
              <van-col span="8">
                <div class="newSmall">
                  <van-image
                    height="60"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                  />
                  <span>坚果 三脚架</span>
                  <span>￥69.00</span>
                </div>
              </van-col>
              <van-col span="8">
                <div class="newSmall">
                  <van-image
                    height="60"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                  />
                  <span>55W 快速充电头</span>
                  <span>￥89.00</span>
                </div>
              </van-col>
              <van-col span="8">
                <div class="newSmall">
                  <van-image
                    height="60"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                  />
                  <span>半入耳式耳机</span>
                  <span>￥30.00</span>
                </div>
              </van-col>
            </van-row>

            <van-row type="flex" gutter="5">
              <van-col span="8">
                <div class="newSmall">
                  <van-image
                    height="60"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                  />
                  <span>磁吸键盘支架</span>
                  <span>￥699.00</span>
                </div>
              </van-col>
              <van-col span="8">
                <div class="newSmall">
                  <van-image
                    height="60"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                  />
                  <span>Smartisan TNT</span>
                  <span>￥1699.00</span>
                </div>
              </van-col>
              <van-col span="8">
                <div class="newSmall">
                  <van-image
                    height="60"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                  />
                  <span>R2 足迹系列手机壳</span>
                  <span>￥69.00</span>
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
            <van-col span="6">
              <div class="hotSalesFirstRow">
                <van-image
                  height="60"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span>1355积分</span>
              </div>
            </van-col>
            <van-col span="6">
              <div class="hotSalesFirstRow">
                <van-image
                  height="60"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span>135.5积分</span>
              </div>
            </van-col>
            <van-col span="6">
              <div class="hotSalesFirstRow">
                <van-image
                  height="60"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span>135积分</span>
              </div>
            </van-col>
            <van-col span="6">
              <div class="hotSalesFirstRow">
                <van-image
                  height="60"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span>135积分</span>
              </div>
            </van-col>
          </van-row>
          <van-row type="flex" gutter="5">
            <van-col span="6">
              <div class="hotSalesSecondRow">
                <van-image
                  height="60"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span>爆卖1352件</span>
                <span>253积分</span>
              </div>
            </van-col>
            <van-col span="6">
              <div class="hotSalesSecondRow">
                <van-image
                  height="60"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span>爆卖352件</span>
                <span>2135.5积分</span>
              </div>
            </van-col>
            <van-col span="6">
              <div class="hotSalesSecondRow">
                <van-image
                  height="60"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span>180天最低价</span>
                <span>1335.5积分</span>
              </div>
            </van-col>
            <van-col span="6">
              <div class="hotSalesSecondRow">
                <van-image
                  height="60"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span>全网最低</span>
                <span>2335.5积分</span>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>

      <div class="recommend">
        <van-tabs v-model="tabActive">
          <van-tab title="推荐商品">
            <van-row type="flex" justify="center">
              <van-col span="12">
                <ul class="productList firstCol">
                  <li>
                    <van-image
                      height="200"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <span>坚果 三脚架</span>
                    <span>￥69.00</span>
                  </li>
                  <li>
                    <van-image
                      height="200"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <span>坚果 三脚架</span>
                    <span>￥69.00</span>
                  </li>
                </ul>
              </van-col>
              <van-col span="12">
                <ul class="productList secondCol">
                  <li>
                    <van-image
                      height="150"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <span>坚果 三脚架</span>
                    <span>￥69.00</span>
                  </li>
                  <li>
                    <van-image
                      height="150"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <span>坚果 三脚架</span>
                    <span>￥69.00</span>
                  </li>
                </ul>
              </van-col>
            </van-row>
          </van-tab>

          <van-tab title="附近店铺">内容 2</van-tab>
        </van-tabs>
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
// @ is an alias to /src
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Toast } from 'vant';


@Component
export default class Home extends Vue {
  userAmount = 85;
  tabBarActive = 0;
  tabActive = 0;
  value = '';
  tabBarUrl = [
    '/', '/goods', '/categories', '/goods',
  ];

  mounted() {
    this.tabBarActive = this.tabBarUrl.indexOf(this.$route.path);
  }
  onClickLeft() {
    this.$router.back();
  }
  onClickRight() {
    Toast('按钮');
  }
  onChange(index: number) {
    const url = this.tabBarUrl[index];
    if (url !== this.$route.path) {
      this.$router.push(url);
    }
  }

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
  subscribeToggle() {
    if (this.subscribed === this.subscribeState.off) {
      this.subscribed = this.subscribeState.on;
    } else {
      this.subscribed = this.subscribeState.off;
    }
  }
}

</script>
<style lang="scss" scope>
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
  .tags{
    > span{
      border: 1px solid;
      padding:2px;
      padding-top: 4px;
      margin-left:4px;
      font-size:10px;
      border-radius: 2px;
    }
    > span:nth-child(1){
      color:#fbc926;
      border-color: #fbc926;
    }
    > span:nth-child(2){
      color:#fa5d16;
      border-color: #fa5d16;
    }
    > span:nth-child(3){
      color:#0d6edd;
      border-color: #0d6edd;
    }
  }
}
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
  > h2 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  span {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 4px;
    padding-bottom: 2px;
    font-size: 12px;
    &:nth-child(3){
      color:red;
    }
  }
  .newBig {
    border-radius: 5px;
    background-color: #fafafa;
    overflow: hidden;
    span:nth-child(2){
      padding-bottom:6px;
    }
  }
  .newSmall {
    border-radius: 5px;
    background-color: #fafafa;
    margin-bottom: 5px;
    overflow: hidden;
  }
}
.hotSales-wrapper {
  padding: 20px 10px;
  background-color: #fafafa;
  .hotSales {
    border-radius: 10px;
    padding: 10px;
    h2 {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    span {
      font-size: 12px;
      color: red;
    }
    .hotSalesFirstRow {
      padding: 5px;
      margin-bottom: 8px;
      text-align: center;
      background-color: #fff;
      border-radius: 5px;
    }
    .hotSalesSecondRow {
      padding: 5px;
      background-color: #fff;
      border-radius: 5px;
      > span {
        display: block;
        text-align: center;
        font-size: 12px;
        padding-top: 4px;
      }
      > span:nth-of-type(odd) {
        background-color: red;
        color: white;
        border-radius: 8px;
        padding: 2px 4px;
        white-space: nowrap;
        font-size: 10px;
      }
    }
  }
}
.recommend {
  .productList {
    > li {
      margin: 10px;
      width: calc(100% - 20px);
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
      > span {
        display: block;
        padding-left: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        font-size: 12px;
        &:nth-child(3) {
          color: red;
        }
      }
    }
    // &.firstCol > li {
    // }
  }
}
</style>