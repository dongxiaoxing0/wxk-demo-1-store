<template>
  <div>
    <TopNav></TopNav>
    <van-tabs v-model="tabActive">
      <van-tab title="未读消息"> </van-tab>
      <van-tab title="全部消息">
        <ul class="messageList">
          <li
            class="messageItem-wrapper"
            v-for="(item, index) in messagesList"
            :key="index"
          >
            <van-swipe-cell>
              <van-cell :border="false" value="内容">
                <div class="messageItem">
                  <span>{{ item.title }}</span>
                  <span>{{ item.content }}</span>
                  <span class="date">{{ item.date }}</span>
                </div>
              </van-cell>
              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                  @click="deleteMessage(index)"
                />
              </template>
            </van-swipe-cell>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

type MessageItem = {
  title: string;
  content: string;
  date: string;
};
@Component
export default class Messages extends Vue {
  tabActive = 0;
  messagesList = [
    {
      title: '登录提醒',
      content: '您的会员 苏十七 于2020-12-18登录成功',
      date: '2020-12-18 12:12:01',
    },
    {
      title: '登录提醒',
      content: '您的会员 苏十七 于2020-12-18登录成功',
      date: '2020-12-18 12:12:02',
    },
    {
      title: '登录提醒',
      content: '您的会员 苏十七 于2020-12-18登录成功',
      date: '2020-12-18 12:12:03',
    },
  ];
  onClickLeft() {
    this.$router.back();
  }
  deleteMessage(index: number){
      this.messagesList.splice(index,1);
  }
  
}
</script>

<style lang="scss" scoped>
.delete-button {
  height: 100%;
}
::v-deep{
    .van-cell{
        padding:6px;
        .van-swipe-cell__right{
            border-radius:8px;
        }
    }
    .van-swipe-cell__wrapper,
    .van-swipe-cell{
        border-radius:8px;
    }
}
.messageList {
    padding:10px;
    background-color: #fafafa;
    li.messageItem-wrapper {
        margin-bottom:10px;
        border-radius:8px;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
        .messageItem {
            background-color:white;
            > span {
                font-size:12px;
                display: block;
                &.date{
                    text-align: end;
                }
            }
        }
    }
}
</style>