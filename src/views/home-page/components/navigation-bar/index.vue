<template>
    <a-menu class="common" v-model:selectedKeys="current" mode="horizontal">

        <a-menu-item key="logo" style="padding-left: 10px">
            <a-avatar :src=logoImg :size="64" />
            <a-button type="text" class="logo-button">
                <div class="logo-text-english">WhaleHub</div>
                <div class="logo-text-chinese">每个孤独的人，都值得被拥抱</div>
            </a-button>
        </a-menu-item>

        <a-menu-item key="assignment" style="padding-left: 90px">
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

        <a-menu-item key="search" style="padding-left: 150px">
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


          <a-input placeholder="" v-model:value="searchKey" style="width: 319px">
            <template #prefix>
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
                <a-dropdown-button>
                  标签
                  <DownOutlined />
                </a-dropdown-button>
              </a-dropdown>
            </template>

            <template #suffix>
              <iconfont type="icon-sousuo" />
            </template>
          </a-input>
        </a-menu-item>

        <a-menu-item key="communication">
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

        <a-menu-item key="portrait"  style="padding-right: 10px">
            <a-avatar class="a-avatar-style" :src=portraitImg size="large" />
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
            const searchKey = ref('');
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
                searchKey,
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
  height: 68px;
  line-height: 60px;
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

/deep/ .ant-menu-item:hover {
  color: white;
}

/deep/ .ant-menu-item-active {
  color: white;
}

/deep/ .ant-menu-item-selected {
  color: white;
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
    right: 40px;
    bottom: 15px;
    color: #E2E0EF;
}
.logo-text-chinese {
    font-size: 12px;
    font-family: SimSun, STSong,serif;
    position: relative;
    top: 5px;
    right: 15px;
    color: white;
    -webkit-transform:scale(0.75);
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