<template>
    <a-menu v-model:selectedKeys="current" mode="horizontal">

        <a-menu-item key="logo">
            <a-avatar :src=logoImg />
            <a-button type="text" class="logo-button">
                <div class="logo-text-english">WhaleHub</div>
                <div class="logo-text-chinese">每个孤独的人，都值得被拥抱</div>
            </a-button>
        </a-menu-item>

        <a-menu-item key="mail">
            <template #icon>
                <mail-outlined />
            </template>
            Navigation One
        </a-menu-item>

        <a-menu-item key="app" disabled>
            <template #icon>
                <appstore-outlined />
            </template>

            Navigation Two
        </a-menu-item>

        <a-sub-menu>
            <template #icon>
                <setting-outlined />
            </template>
            <template #title>Navigation Three - Submenu</template>
            <a-menu-item-group title="Item 1">
                <a-menu-item key="setting:1">Option 1</a-menu-item>
                <a-menu-item key="setting:2">Option 2</a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group title="Item 2">
                <a-menu-item key="setting:3">Option 3</a-menu-item>
                <a-menu-item key="setting:4">Option 4</a-menu-item>
            </a-menu-item-group>
        </a-sub-menu>

        <a-menu-item key="alipay">
            <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        </a-menu-item>
    </a-menu>
</template>

<script>
    import { defineComponent, ref } from 'vue';
    import {Image} from "@/common/entity/Image";
    import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';

    export default defineComponent({
        name: 'NavigationBar',
        setup() {
            const current = ref(['mail']);
            const logoImg = Image.LOGO;
            return {
                current,
                logoImg,
                size: ref(8)
            };
        },
        components: {
            MailOutlined,
            AppstoreOutlined,
            SettingOutlined,
        }
    });
</script>

<style scoped>
.logo-button {
    position: relative;
    padding-right: 0px;
}
.logo-text-english {
    font-size: 8px;
    font-weight:bold;
    font-family: "Times New Roman";
    position: absolute;
    right: 100px;
    bottom: 16px;
}
.logo-text-chinese {
    font-size: 4px;
    font-family: SimSun, STSong;
    position: relative;
    top: 5px;
    right: 11px;
}
</style>