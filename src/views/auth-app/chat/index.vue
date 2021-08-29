<template>
    <div class="box">
        <div class="left-content">左侧聊天列表</div>
        <div class="mid-content">
            <chat-header 
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                title="DC漫威总部"
                description="这里是dc漫迷交流群，请文明交流"
            />
            <chat-window />
        </div>
        <div class="right-content">右侧信息</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/// componetns
import chatHeader from '@/components/chat-header/index.vue';
import chatWindow from '@/components/chat-window/index.vue';

export default defineComponent({
    name: 'chat',
    components: {
        chatHeader,
        chatWindow,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="less" scoped>
.box {
    display: inline-flex;
    .left-content {
        width: 177px;
    }
    .mid-content {
        width: 811px;
        margin: 0 20px
    }
    .right-content {
        width: 269px;
    }
}
</style>