<template>
  <a-row style="margin-top: 30px;margin-bottom: 4px">
    <a-col :span="1" style="text-align: right">
      <a-avatar :src=crownImg size="large" />
    </a-col>
    <a-col :span="5">
      <div class="recommend-style">
        <div style="text-align: left">
        <span class="recommend-font-style">
          推荐好文
        </span>
        </div>
      </div>
    </a-col>

    <a-col :span="2">
      <div class="label-style">
        <span>学习</span>
      </div>
    </a-col>
    <a-col :span="2">
      <div class="label-style">
        <span>影视</span>
      </div>
    </a-col>
    <a-col :span="2">
      <div class="label-style">
        <span>读书</span>
      </div>
    </a-col>
    <a-col :span="1">
      <div class="label-style">
        <span>更多</span>
      </div>
    </a-col>
    <a-col :span="1">
      <iconfont type="icon-fangxiang" class="iconfont-style" />
    </a-col>
    <a-col :span="10">
      <iconfont type="icon-fabu" class="iconfont-style2" />
    </a-col>
  </a-row>



  <div class="div-style">
    <a-carousel arrows :dots="false">
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px;z-index: 1;">
          <LeftOutlined />
        </div>
      </template>

      <div> <a-image :src=whaleImg :preview="false" /> </div>
      <div> <a-image :src=whaleImg :preview="false" /> </div>

      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <RightOutlined />
        </div>
      </template>
    </a-carousel>

    <div class="div-style1">
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="4">
          <div class="label-style1">
            <iconfont type="icon-solid-home" />
            <span class="span-style">广场</span>
            <a-divider type="vertical" class="a-divider-style" dashed />
          </div>
        </a-col>
        <a-col :span="4">
          <div class="label-style1">
            <iconfont type="icon-dingwei" />
            <span class="span-style">个人空间</span>
            <a-divider type="vertical" class="a-divider-style" dashed />
          </div>
        </a-col>
        <a-col :span="4">
          <div class="label-style1">
            <iconfont type="icon-jishiben1" />
            <span class="span-style">个人计划</span>
          </div>
        </a-col>
        <a-col :span="6"></a-col>
      </a-row>
    </div>
  </div>

</template>

<script>
    import { defineComponent, ref } from 'vue';
    import {Image} from "@/common/entity/dynamic-carousel/Image"
    import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';

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
          LeftOutlined,
          RightOutlined,
        },
    })
</script>

<style scoped>

@import "../../../../assets/resources/dynamic-carousel/css/style.css";

.a-divider-style {
  position: absolute;
  right: 0;
  top: 15px;
  border-color: rgb(245, 241, 241);
  margin: 0;
  height: 30px;
}

.label-style1:hover > .span-style {
  border-bottom: 4px solid rgb(255, 228, 67);
  opacity: 1;
}

.span-style {
  display: inline-block;
  margin-top: 1px;
  height: 59px;
  margin-left: 4px;
}

.label-style1 {
  font-size: 20px;
  color: rgb(96, 96, 96);
  font-weight: bold;
  white-space: nowrap;
  line-height: 60px;
  font-family: "Microsoft YaHei", 微软雅黑, -apple-system, BlinkMacSystemFont, "PingFang SC", Helvetica, Tahoma, Arial, sans-serif;
}

.label-style1:hover {
  color: rgb(233, 233, 233);
}

.div-style1 {
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0px;
  background: rgba(107, 128, 155, 0.5);
  border-radius: 0px 0px 20.5px 20.5px;
}

.div-style {
  width: 100%;
  position: relative;
  /*height: 75px;*/
  /*background: darkseagreen;*/
}

.iconfont-style2 {
  float: right;
  font-size: 34px;
  color: #767676;
}

.iconfont-style {
  line-height: 38px;
  float: left;
  color: #A7A7A7;
  position: relative;
  right: 10px;
}

.label-style {
  /*float: right;*/
  width: 34px;
  font-size: 16px;
  font-family: "Microsoft YaHei", 微软雅黑, -apple-system, BlinkMacSystemFont, "PingFang SC", Helvetica, Tahoma, Arial, sans-serif;
  text-align: center;
  color: rgb(119, 119, 119);
  font-weight: bold;
  white-space: nowrap;
  line-height: 34px;
  opacity: 1;
  /*margin: 0 auto;*/
}

.label-style:hover {
  color: rgb(255, 228, 67);
  border-bottom: 3px solid rgb(255, 228, 67);
}

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
  height: 420px;
  line-height: 420px;
  /*background: #364d79;*/
  overflow: hidden;
  /*border-radius: 20.5px;*/
  filter: drop-shadow(rgba(0, 0, 0, 0.15) 0px 3px 6px));
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 68px;
  height: 128px;
  line-height: 125px;
  font-size: 70px;
  color: white;
  background-color: #E9E6E6;
  /*position: relative;*/
  /*bottom: 69px;*/
  /*opacity: 0.3;*/
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.8;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>