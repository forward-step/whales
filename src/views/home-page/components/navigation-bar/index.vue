<template>
    <a-menu class="common" v-model:selectedKeys="current" mode="horizontal">

        <a-menu-item key="logo">
            <a-avatar :src=logoImg />
            <a-button type="text" class="logo-button">
                <div class="logo-text-english">WhaleHub</div>
                <div class="logo-text-chinese">每个孤独的人，都值得被拥抱</div>
            </a-button>
        </a-menu-item>

        <a-menu-item key="assignment">
            任务榜单
        </a-menu-item>

        <a-menu-item key="intelligent">
            自律达人
        </a-menu-item>

        <a-menu-item key="contribute">
            投稿须知
        </a-menu-item>

        <a-menu-item key="business">
            商务合作
        </a-menu-item>

        <a-menu-item key="copyright">
            版权申明
        </a-menu-item>

        <a-menu-item key="search">
<!--          <a-input-group size="large">-->
<!--            <a-row :gutter="8">-->
<!--              <a-col :span="5">-->
<!--                <a-input v-model:value="value1" />-->
<!--              </a-col>-->
<!--              <a-col :span="8">-->
<!--                <a-input v-model:value="value2" />-->
<!--              </a-col>-->
<!--            </a-row>-->
<!--          </a-input-group>-->
<!--            <a-input-group compact>-->
<!--                <a-select v-model:value="value">-->
<!--                    <a-select-option value="Option1">Option1</a-select-option>-->
<!--                    <a-select-option value="Option2">Option2</a-select-option>-->
<!--                </a-select>-->
<!--            </a-input-group>-->
<!--          <a-input-search-->
<!--              v-model:value="value"-->
<!--              placeholder="input search text"-->
<!--              style="width: 200px"-->
<!--              @search="onSearch"-->
<!--          />-->
          <a-dropdown>
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1">
                  <UserOutlined />
                  1st menu item
                </a-menu-item>
                <a-menu-item key="2">
                  <UserOutlined />
                  2nd menu item
                </a-menu-item>
                <a-menu-item key="3">
                  <UserOutlined />
                  3rd item
                </a-menu-item>
              </a-menu>
            </template>
            <a-button>
              Button
              <iconfont type="icon-sousuo" />
            </a-button>
          </a-dropdown>
        </a-menu-item>

        <a-menu-item key="communication">
            <a-badge count="5">
                <a href="#" class="head-example" />
            </a-badge>
        </a-menu-item>

        <a-menu-item key="notification">
            <a href="#">
                <a-badge count="5">
                    <span class="head-example" />
                </a-badge>
            </a>
        </a-menu-item>

        <a-menu-item key="portrait">
            <a-avatar :src=portraitImg :size="64">
                <template #icon><UserOutlined /></template>
            </a-avatar>
        </a-menu-item>
    </a-menu>
</template>

<script>
    import { defineComponent, ref } from 'vue';
    import {Image} from "@/common/entity/navigation-bar/Image";
    import { MailOutlined, AppstoreOutlined, SettingOutlined, DownOutlined, UserOutlined } from '@ant-design/icons-vue';

    export default defineComponent({
        name: 'NavigationBar',
        setup() {
            const current = ref(['mail']);
            const logoImg = Image.LOGO;
            const portraitImg = Image.PORTRAIT;
            const value = ref('');
            const onSearch = (searchValue) => {
                console.log('use value', searchValue);
                console.log('or use this.value', value.value);
            };
            const handleMenuClick = () => {
              console.log("==================")
            }
            return {
                current,
                logoImg,
                portraitImg,
                size: ref(8),
                value,
                onSearch,
                handleMenuClick
            };
        },
        components: {
            MailOutlined,
            AppstoreOutlined,
            SettingOutlined,
            DownOutlined,
            UserOutlined
        }
    });
</script>

<style scoped>
.common {
  background: rgb(95, 85, 166);
  color: white;
}

.logo-button {
    position: relative;
    padding-right: 0px;
}
.logo-text-english {
    font-size: 8px;
    font-weight:bold;
    font-family: "Times New Roman",serif;
    position: absolute;
    right: 100px;
    bottom: 16px;
}
.logo-text-chinese {
    font-size: 4px;
    font-family: SimSun, STSong,serif;
    position: relative;
    top: 5px;
    right: 11px;
}
.head-example {
     width: 42px;
     height: 42px;
     border-radius: 4px;
     background: #eee;
     display: inline-block;
     vertical-align: middle;
 }
</style>