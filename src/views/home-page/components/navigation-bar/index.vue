<template>
    <a-menu class="common" v-model:selectedKeys="current" mode="horizontal">

        <a-menu-item key="logo" style="width: 291px; padding-left: 47px;">
            <a-avatar :src=logoImg :size="64" />
            <a-button type="text" class="logo-button">
                <div class="logo-text-english">WhaleHub</div>
                <div class="logo-text-chinese">每个孤独的人，都值得被拥抱</div>
            </a-button>
        </a-menu-item>

        <a-menu-item key="assignment">
          <span class="a-menu-item-style">任务榜单</span>
        </a-menu-item>

        <a-menu-item key="intelligent" class="a-menu-item-style">
            <span class="a-menu-item-style">自律达人</span>
        </a-menu-item>

        <a-menu-item key="contribute" class="a-menu-item-style">
          <span class="a-menu-item-style">投稿须知</span>
        </a-menu-item>

        <a-menu-item key="business" class="a-menu-item-style">
          <span class="a-menu-item-style">商务合作</span>
        </a-menu-item>

        <a-menu-item key="copyright" class="a-menu-item-style">
          <span class="a-menu-item-style">版权申明</span>
        </a-menu-item>

        <a-menu-item key="search">
          <a-input placeholder="" v-model:value="searchKey" class="a-input-style">
            <template #prefix>
              <a-dropdown>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="1" @click="handleMenuClick('夕阳')">
                      <iconfont type="icon-biaoqian2" />
                      夕阳
                    </a-menu-item>
                    <a-menu-item key="2" @click="handleMenuClick('云海')">
                      <iconfont type="icon-biaoqian2" />
                      云海
                    </a-menu-item>
                    <a-menu-item key="3" @click="handleMenuClick('星光')">
                      <iconfont type="icon-biaoqian2" />
                      星光
                    </a-menu-item>
                  </a-menu>
                </template>
                <span>
                  <span style="color: #49475D">{{searchLabel}}&nbsp;&nbsp;</span>
                  <CaretDownOutlined class="CaretDownOutlined-style" />
                </span>
              </a-dropdown>
            </template>

            <template #suffix>
              <iconfont type="icon-sousuo" class="iconfont-search-style" />
            </template>
          </a-input>
        </a-menu-item>

        <a-menu-item key="communication" style="padding-left: 55px">
            <a-badge count="5" :offset="[-8, 23]" >
              <iconfont type="icon-duihuaqipao" class="iconfont-style" />
            </a-badge>
        </a-menu-item>

        <a-menu-item key="notification">
            <a href="#">
                <a-badge count="5" :offset="[-8, 23]" >
                  <iconfont type="icon-tixing" class="iconfont-style" />
                </a-badge>
            </a>
        </a-menu-item>

        <a-menu-item key="portrait"  style="padding-right: 50px">
            <a-avatar class="a-avatar-style" :src=portraitImg size="large" />
        </a-menu-item>
    </a-menu>
</template>

<script>
    import { defineComponent, ref } from 'vue';
    import {Image} from "@/common/entity/navigation-bar/Image";
    import { MailOutlined, AppstoreOutlined, SettingOutlined, DownOutlined, UserOutlined, CaretDownOutlined } from '@ant-design/icons-vue';

    export default defineComponent({
        name: 'NavigationBar',
        setup() {
            const current = ref(['mail']);
            const logoImg = Image.LOGO;
            const portraitImg = Image.PORTRAIT;
            const value = ref('');
            const searchKey = ref('');
            const searchLabel = ref('标签')
            const onSearch = (searchValue) => {
                console.log('use value', searchValue);
                console.log('or use this.value', value.value);
            };
            return {
                current,
                logoImg,
                portraitImg,
                size: ref(8),
                value,
                searchKey,
                searchLabel,
                onSearch
            };
        },
        methods: {
          handleMenuClick: function (searchLabel) {
            this.searchLabel = searchLabel;
          }
        },
        components: {
            MailOutlined,
            AppstoreOutlined,
            SettingOutlined,
            DownOutlined,
            UserOutlined,
            CaretDownOutlined
        }
    });
</script>

<style scoped>
@import "../../../../assets/resources/navigation-bar/css/style.css";

.common {
  background: rgb(95, 85, 166);
  color: white;
  height: 60px;
  line-height: 56px;
}

.iconfont-search-style {
  color: #4E4A60;
  font-weight: bold;
  font-size: 20px;
  height: 18px;
  width: 16px;
}

.a-menu-item-style {
  font-family: "Microsoft Yahei",serif;
  font-weight: bold;
  color: white;
  display: block;
  padding-right: 10px;
  padding-left: 10px;
  height: 60px;
}

.a-menu-item-style:hover {
  background: #939DC1;
}

.iconfont-style {
  width: 35px;
  height: 35px;
  font-size: 35px;
  color: white;
  display: inline-block;
  vertical-align: middle;
}

.a-avatar-style {
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
}

.a-input-style {
  width: 319px;
  height: 35px;
  background: #CECAE0;
}

/deep/ .ant-input {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #CECAE0;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
}

/deep/ .ant-badge-count {
  z-index: 1;
  min-width: 12px;
  height: 12px;
  padding: 0 3px;
  color: #fff;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  white-space: nowrap;
  text-align: center;
  background: #ff4d4f;
  border-radius: 6px;
  box-shadow: 0 0 0 1px #fff;
}

.logo-button {
    position: relative;
    padding-right: 0px;
    right: 20px;
    top: 8px;
}
.logo-text-english {
    font-size: 23px;
    font-weight:bold;
    font-family: "Times New Roman",serif;
    position: absolute;
    right: 39px;
    bottom: 17px;
    color: #E2E0EF;
}
.logo-text-chinese {
    font-size: 12px;
    font-family: SimSun, STSong,serif;
    position: relative;
    top: 4px;
    right: 14px;
    color: white;
    -webkit-transform:scale(0.80);
}

.CaretDownOutlined-style {
  font-size: 12px;
  color: #87859B;
  -webkit-transform:scale(0.65);
}
</style>