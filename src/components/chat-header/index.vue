<template>
    <header class="chat-title">
        <img
            class="chat-title__img"
            :src="src"
            @click="$emit('clickImg')"
        />
        <div class="chat-title__text">
            <span class="chat-title__title">{{title}}</span>
            <div class="chat-title__description">{{description}}</div>
        </div>
        <div class="chat-title__btn">
            <div class="chat-title__setting" @click="$emit('clickSetting')">...</div>
            <div class="chat-title__phone" @click="$emit('clickPhone')">电话</div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: '',
    props: {
        src: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    emits: [
        'clickImg', 'clickSetting', 'clickPhone'
    ],
    setup() {
        return {};
    },
});
</script>

<style lang="less" scoped>
.chat-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 57px;
    border-radius: 20px;
    background-color: #ffffff;
    text-shadow: 0px 3px 6px 0px rgba(0,0,0,0.15); 
    &__img {
        width: 35px;
        height: 35px;
        margin-left: 9px;
        border-radius: 100px !important;
        .clickable;
    }
    &__text {
        width: 100%;
        margin-right: auto;
        margin-left: 10px;
    }
    &__title {
        font-size: 12px;
        font-family: Arial Black, Arial Black-Normal;
        color: #333333;
        line-height: 20px;
    }
    &__description {
        font-size: 8px;
        font-family: SimHei, SimHei-Bold;
        font-weight: Bold;
        color: #bdc3cb;
        line-height: 20px;
    }
    &__btn {
        display: flex;
        align-items: center;
        margin-right: 3px;
    }
    &__setting {
        .btn-icon;
        margin-right: 17px;
    }
    &__phone {
        .btn-icon;
        margin-right: 3px;
    }
}
.btn-icon {
    width: 35px;
    height: 35px;
    border-radius: 100px;
    background: #f4f3f8;
    text-align: center;
    line-height: 35px;
    .clickable;
}
</style>