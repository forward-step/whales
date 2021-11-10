<template>
<!--  <a-button type="primary">Primary Button</a-button>-->
<!--    <a-row style="height: 30px;text-align: center">-->
<!--      <a-col :span="3">col-3</a-col>-->
<!--      <a-col :span="18" style="background: lightyellow;">col-18</a-col>-->
<!--      <a-col :span="3">col-3</a-col>-->
<!--    </a-row>-->

  <a-row style="margin-top: 30px;">
    <a-col :span="1" style="text-align: right">
      <a-avatar :src=crownImg size="large" />
    </a-col>
    <a-col :span="2">
      <div class="recommend-style">
        <div style="text-align: left">
        <span class="recommend-font-style">
          推荐好文
        </span>
        </div>
      </div>
    </a-col>
  </a-row>

  <a-card>
    <a-carousel arrows>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px;z-index: 1;">
          <left-circle-outlined />
        </div>
      </template>

      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>

      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>

    </a-carousel>

    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Tab 1">1</a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">3</a-tab-pane>
    </a-tabs>
  </a-card>

</template>

<script>
    import { defineComponent, ref } from 'vue';
    import {Image} from "@/common/entity/dynamic-carousel/Image"
    import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

    export default defineComponent({
        name: "DynamicCarousel",
        setup() {
            const activeKey = ref('');
            const crownImg = Image.CROWN;
            const whaleImg = Image.WHALE;

            return {
              activeKey,
              crownImg,
              whaleImg
            }
        },
        components: {
          LeftCircleOutlined,
          RightCircleOutlined,
        },
    })
</script>

<style scoped>
.recommend-style {
  font-size: 72px;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, Helvetica, Tahoma, Arial, "Microsoft YaHei", 微软雅黑, sans-serif;
  text-align: center;
  color: rgb(51, 51, 51);
  font-weight: bold;
  white-space: pre-wrap;
  letter-spacing: 0px;
  word-break: break-word;
  line-height: 75px;
  filter: drop-shadow(rgb(169, 169, 169) 0px 6px 6px);
  transform-origin: left top;
  transform: scale(0.5);
  transition: unset;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  min-width: 300px;
}

.recommend-font-style {
  letter-spacing: 0px;
  line-height: 75px;
  font-weight: bold;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, Helvetica, Tahoma, Arial, "Microsoft YaHei", 微软雅黑, sans-serif;
  font-size: 62px;
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>