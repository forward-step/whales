<template>
  <a-row style="margin-top: 30px;margin-bottom: 4px">
    <a-col :span="1" style="text-align: center">
      <a-avatar :src=crownImg size="large" />
    </a-col>
    <a-col :span="3">
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
<!--    <a-col :span="10">-->
<!--      <iconfont type="icon-fabu" class="iconfont-style2" />-->
<!--    </a-col>-->
  </a-row>

  <a-row>
    <a-col :span="19">

      <div class="div-style2">
        <span>#入秋了，你是否有想见的人</span>
      </div>

      <div class="div-style">
        <a-carousel arrows>
          <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px;z-index: 1;">
              <LeftOutlined />
            </div>
          </template>

          <div> <a-image :src=blueWhaleImg :preview="false" /> </div>
          <div> <a-image :src=whaleImg :preview="false" /> </div>
          <div> <a-image :src=blueWhaleImg :preview="false" /> </div>
          <div> <a-image :src=whaleImg :preview="false" /> </div>
          <div> <a-image :src=blueWhaleImg :preview="false" /> </div>

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

    </a-col>
    <a-col :span="5">

      <div class="div-style3">
        <div class="label-style2">
          <iconfont type="icon-yonghu" style="opacity: 0.6" />
          <span class="span-style1">创作中心</span>
        </div>

        <a-row style="padding-bottom: 5px">
          <a-col :span="8">
            <iconfont type="icon-caogao" class="iconfont-style3" />
            <span class="span-style2">投稿创作</span>
          </a-col>
          <a-col :span="8" style="float: left">
            <iconfont type="icon-dianfei" class="iconfont-style3" />
            <span class="span-style2">发布瞬间</span>
          </a-col>
          <a-col :span="8">
            <iconfont type="icon-asAFSDFASD" class="iconfont-style3" />
            <span class="span-style2">安排计划</span>
          </a-col>
        </a-row>

        <div class="label-style2">
          <iconfont type="icon-bianji1" />
          <span class="span-style1">记录中心</span>
        </div>

        <div class="div-style4">
          <a-row>
            <a-col :span="12">
              <span class="span-praise">今日获赞数</span>
              <span class="span-praise-num">67</span>
              <span class="span-praise-hot">累积获赞数进热门</span>
              <a-divider type="vertical" class="a-divider-style1" dashed />
            </a-col>
            <a-col :span="12">
              <span class="span-praise">今日阅读数</span>
              <span class="span-praise-num">128</span>
              <span class="span-praise-hot">阅读数提高曝光度</span>
            </a-col>
          </a-row>
        </div>


      </div>

    </a-col>
  </a-row>

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
            const blueWhaleImg = Image.BLUEWHALE;

            return {
              activeKey,
              crownImg,
              whaleImg,
              blueWhaleImg
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

.span-praise-hot {
  font-size: 12px;
  font-family: SimHei, "Heiti SC", 黑体, sans-serif;
  text-align: left;
  color: rgb(171, 167, 167);
  font-weight: bold;
  position: relative;
  bottom: 10px;
}

.span-praise-num {
  font-size: 30px;
  font-family: "Arial Black";
  text-align: center;
  color: rgb(0, 0, 0);
  font-weight: bold;
  display: block;
  position: relative;
  bottom: 5px;
}

.span-praise {
  font-size: 18px;
  font-weight: bold;
  font-family: SimHei, "Heiti SC", 黑体, sans-serif;
  text-align: center;
  color: rgb(171, 167, 167);
  display: block;
  padding-top: 22px;
}

.a-divider-style1 {
  position: absolute;
  right: 0;
  top: 20px;
  border-color: rgb(154, 152, 152);;
  margin: 0;
  border-left-width: 2px;
  height: 90px;
}

.div-style4 {
  background: rgba(216, 216, 216, 0.6);
  width: 100%;
  height: 128px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0px 0px 10.5px 10.5px;
}

.span-style2 {
  font-size: 12px;
  font-family: SimHei, "Heiti SC", 黑体, sans-serif;
  text-align: left;
  color: rgb(15, 15, 15);
}

.iconfont-style3 {
  /*width: 100%;*/
  font-size: 45px;
  text-align: center;
  padding-bottom: 5px;
  display: block;
}

.span-style1 {
  font-size: 14px;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, Helvetica, Tahoma, Arial, "Microsoft YaHei", 微软雅黑, sans-serif;
  text-align: left;
  color: rgb(51, 51, 51);
  position: relative;
  left: 12px;
  bottom: 4px;
}

.label-style2 {
  font-size: 21px;
  color: rgb(173, 172, 172);
  font-weight: bold;
  text-align: left;
  padding-bottom: 5px;
}

.div-style3 {
  width: 240px;
  height: 300px;
  float: right;
  padding: 15px 20px;
  background: white;
  position: relative;
  border-radius: 10.5px;
  filter: drop-shadow(rgba(0, 0, 0, 0.15) 0px -1px 2px);
}

.div-style3:hover {
  filter: drop-shadow(rgba(0, 0, 0, 0.15) 0px -2px 4px);
  transition: all 0.5s;
}

.div-style2 {
  font-size: 40px;
  font-family: "Microsoft YaHei", 微软雅黑, -apple-system, BlinkMacSystemFont, "PingFang SC", Helvetica, Tahoma, Arial, sans-serif;
  text-align: left;
  color: rgb(171, 167, 167);
  white-space: pre-wrap;
  letter-spacing: 0px;
  word-break: break-word;
  line-height: 78px;
  transform-origin: left top;
  transform: scale(0.5);
  transition: unset;
  position: absolute;
  bottom: 23px;
  left: 23px;
  z-index: 1;
}

.a-divider-style {
  position: absolute;
  right: 0;
  top: 12px;
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
  height: 49px;
  margin-left: 4px;
}

.label-style1 {
  font-size: 17px;
  color: rgb(96, 96, 96);
  font-weight: bold;
  white-space: nowrap;
  line-height: 50px;
  font-family: "Microsoft YaHei", 微软雅黑, -apple-system, BlinkMacSystemFont, "PingFang SC", Helvetica, Tahoma, Arial, sans-serif;
}

.label-style1:hover {
  color: rgb(233, 233, 233);
}

.div-style1 {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0px;
  /*background: rgba(107, 128, 155, 0.5);*/
  background: rgba(109, 136, 173, 0.6);
  border-radius: 0px 0px 10.5px 10.5px;
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
  font-size: 14px;
  font-family: "Microsoft YaHei", 微软雅黑, -apple-system, BlinkMacSystemFont, "PingFang SC", Helvetica, Tahoma, Arial, sans-serif;
  text-align: center;
  color: rgb(119, 119, 119);
  font-weight: bold;
  white-space: nowrap;
  line-height: 35px;
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
  line-height: 55px;
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
  font-weight: bold;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, Helvetica, Tahoma, Arial, "Microsoft YaHei", 微软雅黑, sans-serif;
  font-size: 42px;
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 300px;
  line-height: 300px;
  /*background: #364d79;*/
  overflow: hidden;
  /*border-radius: 20.5px;*/
  filter: drop-shadow(rgba(0, 0, 0, 0.15) 0px 3px 6px));
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 58px;
  height: 108px;
  line-height: 108px;
  font-size: 40px;
  color: white;
  /*background-color: #E9E6E6;*/
  /*position: relative;*/
  /*bottom: 69px;*/
  /*opacity: 0.8;*/
  background: rgb(211, 204, 204);
  opacity: 0.5;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.4;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>