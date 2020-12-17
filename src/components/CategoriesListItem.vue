<template>
  <div class="group">
        <div class="groupTitle">
          <span>{{categoriesGroup.groupTitle}}</span>
          <van-icon name="arrow" size="18" />
        </div>
      <ul>
        <li v-for="(item,index) in categoriesGroup.group" :key="index">{{item}}</li>
      </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

type CategoriesGroup = {
    groupTitle: string;
    group: string[];
};
@Component
export default class CategoriesListItem extends Vue {
  @Prop() categoriesGroup!: CategoriesGroup
  
      
}
</script>

<style lang="scss" scoped>
%rect{
    position: relative;
    &::before{
        display: block;
        content: '';
        height: 50%;
        width: 4px;
        background-color: #0068dc;
        position: absolute;
        top: 25%;
        left: 0px;
    }
}
.group{
    background-color: #fff;
    padding:10px 5px;
    font-size:16px;
    border-radius: 10px;
    margin-bottom: 20px;
    .groupTitle{
        @extend%rect;
        padding: 12px;
        padding-left: 16px;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span{
            display: inline-block;
        }
    }
    
    > ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        >li{
            background-color: #f7f7f7;
            padding:8px;
            padding-left:16px;
            width: calc(50% - 5px);
            border-radius: 4px;
            margin-bottom: 5px;
        }
    }

}
</style>