<template>
    <div>
        <TopNav title='账户安全'></TopNav>
        <van-cell value="" center is-link>
        <template #title>
            <van-image 
            round
            width="4rem"
            height="4rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
        </template>
        </van-cell>
        <van-cell title="用户名" center>
                <van-field
                    v-model="value"
                    input-align="right"
                    @field-text-area-min-height="2000"
                />
        </van-cell>
        <van-cell title="昵称" is-link value="苏十七" />

        <van-cell is-link @click="genderShowPopup" title="性别" :value="gender" ></van-cell>
        <van-picker
            class="genderPicker"
            :class="genderShow && 'genderPopup'"
            title="性别"
            show-toolbar
            :columns="columns"
            @confirm="onGenderConfirm"
            @cancel="onCancel"
        />

        <van-cell is-link @click="birthShowPopup" title="出生日期" :value="birthDate"></van-cell>
            <van-datetime-picker
                v-model="currentDate"
                class="birthDatePicker"
                :class=" birthShow && 'birthPopup'"
                type="date"
                title="选择年月日"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="onBirthConfirm"
                @cancel="onCancel"
            />
        <div class="cover" :class="coverUp && 'coverUp'"></div>


    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import dayjs from 'dayjs';

    @Component
    export default class UserSettings extends Vue {
        value = 'ddd'
        minDate: Date = new Date(2020, 0, 1)
        maxDate: Date = new Date(2025, 10, 1)
        currentDate: Date = new Date()
        birthDate: string = dayjs(this.currentDate).format('YYYY/MM/DD')
        gender = '男'
        columns = ['男', '女']
        genderShow =  false
        birthShow = false
        coverUp = false
        genderShowPopup() {
            this.genderShow = true;
            this.coverUp = true;
        }
        onGenderConfirm(value: string) {
            this.gender = value;
            this.coverUp = false;
            this.genderShow = false;
        }
        birthShowPopup() {
            this.birthShow = true;
            this.coverUp = true;
        }
        onBirthConfirm(value: Date){
            this.currentDate = value;
            this.birthDate = dayjs(this.currentDate).format('YYYY/MM/DD');
            this.birthShow = false;
            this.coverUp = false;
        }
        onCancel(){
            this.birthShow = false;
            this.genderShow =false;
            this.coverUp = false;
        }

    }
</script>

<style lang="scss" scoped>
// ::v-deep{
//     div.van-cell.van-field{
//         padding:0;
//         padding-right:20px;
//     }
//     .van-field__control{
//         color:#969799;
//     }
// }
.genderPicker,
.birthDatePicker{
    position:fixed;
    width:100vw;
    top:100%;
    transition: all 0.5s;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.genderPopup,
.birthPopup{
    transform:translateY(-100%);
    z-index: 3;
}
.cover{
    display: none;
    width:100vw;
    height:100vh;
    position: fixed;
    top:0;
    left: 0;
    z-index:2;
    background-color: #a8a8a8;
    opacity: 0.7;
    &.coverUp{
        display:block;
    }
}
</style>