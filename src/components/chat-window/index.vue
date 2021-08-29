<template>
    <div class="box">
        <div class="window" ref="windwoRef">
            <div class="left">
                <img
                    class="left__img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <div class="left__content">作业写完了吗，写完一起打lol，我艾欧尼亚砖石段位，保证可以带你飞，只要你立马上号！！！！</div>
            </div>
            <div class="right">
                <div class="right__content">不了不了，打个鬼，就你这技术，到时候又把我带掉段位，我还得重新自己打，太亏了。</div>
            </div>
            <div class="right">
                <div class="right__content">我信你个鬼，糟老头坏得很</div>
            </div>
            <div class="left">
                <img
                    class="left__img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <div class="left__content">确实，信他的话会被坑得很惨，信我的话</div>
            </div>
            <a-divider>TODAY</a-divider>
            <div class="left">
                <img
                    class="left__img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <div class="left__content">兄弟们，吃完饭了吗，出来散散步把？？</div>
            </div>
            <div class="right">
                <div class="right__content">吃完走一走，活到99！！去那儿散步？要不要去东街喝点东西？哪里新出了饮品据说是爆款，我很想去试试！</div>
            </div>
            <div class="right">
                <div class="right__content">最重要的是我女神也会去！我要请她喝奶茶，兄弟们</div>
            </div>
            <div class="left">
                <img
                    class="left__img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <div class="left__content">？？？？？？？？？你退群吧，我们不需要你这种背叛组织的人！！！！FFF团绝对不姑息背弃信仰的二五仔</div>
            </div>
            <div class="left">
                <img
                    class="left__img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <div class="left__content">？？？？是不是兄弟？？？？？是不是兄弟？？？？是不是兄弟？？？？是不是兄弟？？？？</div>
            </div>
        </div>
        <div class="send">
            <a-input class="send__input" placeholder="" v-model:value="inputValue"/>
            <div class="send__btn" @click="$emit('clickSend', inputValue)">发送</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
    name: 'chat-window',
    emits: ['clickSend'],
    setup() {
        const windwoRef = ref<HTMLDivElement>();
        const inputValue = ref<string>('');
        const scroll2bottom = () => {
            if(windwoRef.value) {
                windwoRef.value.scrollTop = windwoRef.value.scrollHeight;
            }
        }
        onMounted(() => {
            scroll2bottom();
        });
        return {
            windwoRef,
            inputValue,
        };
    },
});
</script>


<style lang="less" scoped>
.box {
    height: calc(100vh - 100px);
    display: inline-flex;
    flex-direction: column;
    .window {
        flex: 1;
        overflow-y: auto;
    }
    .window::-webkit-scrollbar {
        display: none;
    }
}
.left {
    display: inline-flex;
    &__img {
        width: 30px;
        height: 30px;
        padding: 2px;
        border-radius: 100px;
        font-size: 10px;
        line-height: 15px;
        font-family: Arial Black, Arial Black-Bold;
        font-weight: Bold;
        letter-spacing: 1px;
        .clickable;
    }
    &__content {
        .content;
        margin-left: 8px;
        color: #fcfcfc;
        background: #4a4ba3;
        border-start-start-radius: 0px;
    }
}
.right {
    width: 100%;
    display: inline-flex;
    justify-content: flex-end;
    &__content {
        .content;
        color: #0a0a0a;
        background: #fff;
        border-start-end-radius: 0px;
    }
}
.send {
    width: 100%;
    display: inline-flex;
    margin-top: 37px;
    &__input {
        height: 35px;
        border-radius: 10px;
    }
    &__btn {
        width: 35px;
        height: 35px;
        margin-left: 13px;
        text-align: center;
        line-height: 35px;
        border-radius: 100px;
        background: #ebebf4;
        .clickable;
    }
}

.content {
    width: 400px;
    padding: 15px 19px;
    margin-top: 15px;
    border-radius: 10px;
}
</style>