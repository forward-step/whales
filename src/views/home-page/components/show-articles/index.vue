<template>
  <a-row style="margin-top: 30px;margin-bottom: 4px">
    <a-col :span="1" style="text-align: center">
      <a-avatar :src=hotIssueImg size="large" />
    </a-col>
    <a-col :span="3">
      <div class="recommend-style">
        <div style="text-align: left">
        <span class="recommend-font-style">
          热门瞬间
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
    <a-col :span="12">
      <ReloadOutlined class="iconfont-style2" />
    </a-col>
  </a-row>

  <a-row>
    <a-col :span="4">
      <a-card hoverable class="a-card-style">
        <template #cover>
          <div class="div-img" :style="imgStyle">
            <div class="div-image" :style="imgStyle">
              <div class="image-box" :style="articleImgStyle"></div>
            </div>
          </div>
        </template>

        <a-card-meta>
          <template #avatar>
            <div class="div-badge">
              <span class="span-badge">More</span>
            </div>
            <div class="div-month">
              <span class="span-month">SEPTEMBER 30TH</span>
            </div>
            <div class="div-title">
              <span>生活语言</span>
            </div>
            <div class="div-article">
              <span>把圈子变小，把语言变干净，把成绩往上提，把故事往心里收一收，现在想要的以后你都会有。</span>
            </div>
          </template>
        </a-card-meta>

        <template class="ant-card-actions" #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
      </a-card>

      <a-card hoverable class="a-card-style">
        <template #cover>
          <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template class="ant-card-actions" #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-card-meta>
      </a-card>
    </a-col>

    <a-col :span="1"></a-col>
    <a-col :span="4">
      <a-card hoverable class="a-card-style1">
        <template #cover>
          <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template class="ant-card-actions" #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-card-meta>
      </a-card>

      <a-card hoverable class="a-card-style1">
        <template #cover>
          <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template class="ant-card-actions" #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-card-meta>
      </a-card>
    </a-col>

    <a-col :span="1"></a-col>
    <a-col :span="4">
      <a-card hoverable class="a-card-style1">
        <template #cover>
          <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template class="ant-card-actions" #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-card-meta>
      </a-card>
    </a-col>

    <a-col :span="1"></a-col>
    <a-col :span="4">
      <a-card hoverable class="a-card-style1">
        <template #cover>
          <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template class="ant-card-actions" #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-card-meta>
      </a-card>
    </a-col>

    <a-col :span="1"></a-col>
    <a-col :span="4">
      <a-card hoverable class="a-card-style1">
        <template #cover>
          <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template class="ant-card-actions" #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>

</template>

<script>
  import { defineComponent, ref } from 'vue';
  import {ImgUtil} from "@/common/util/ImgUtil";
  import {Image} from "@/common/entity/show-articles/Image";
  import { ReloadOutlined, SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';

  export default defineComponent({
    name: "ShowArticles",
    setup() {
      const hotIssueImg = Image.HOTISSUE;
      const articleImgStyle = ImgUtil.getBackImgUrl(Image.ARTICLEONE);
      const imgStyle = ImgUtil.getImgHeight(Image.ARTICLEONE);

      return {
        hotIssueImg,
        articleImgStyle,
        imgStyle
      }
    },
    components: {
      ReloadOutlined,
      SettingOutlined,
      EditOutlined,
      EllipsisOutlined
    }
  })
</script>

<style scoped>

@import "../../../../assets/resources/show-articles/css/style.css";

.div-article {
  font-size: 28px;
  font-family: arial;
  text-align: left;
  color: rgb(51, 51, 51);
  white-space: pre-wrap;
  letter-spacing: 0px;
  word-break: break-word;
  line-height: 56px;
  transform-origin: left top;
  transform: scale(0.5);
  transition: unset;
  /*position: absolute;*/
  /*top: 0px;*/
  /*left: 0px;*/
  /*width: 100%;*/
}

.div-title {
  font-size: 40px;
  font-family: "Ek Mukta", sans-serif;
  text-align: left;
  color: rgb(7, 7, 7);
  font-weight: bold;
  white-space: nowrap;
  letter-spacing: 0px;
  word-break: normal;
  line-height: 56px;
  transform-origin: left top;
  transform: scale(0.5);
  transition: unset;
  margin-top: 14px;
  margin-bottom: 14px;
}

.span-month {
  color: rgb(153, 153, 153);
  font-family: "Ek Mukta", sans-serif;
  line-height: 56px;
  font-size: 26px;
}

.div-month {
  font-size: 26px;
  font-family: "Ek Mukta", sans-serif;
  text-align: left;
  color: rgb(153, 153, 153);
  white-space: nowrap;
  letter-spacing: 0px;
  word-break: normal;
  line-height: 56px;
  transform-origin: left top;
  transform: scale(0.5);
  transition: unset;
  position: absolute;
  top: 12px;
  left: 62px;
}

.span-badge {
  font-size: 16px;
  font-family: "Arial Black";
  text-align: center;
  color: rgb(255, 254, 254);
  white-space: pre-wrap;
  letter-spacing: 0px;
  word-break: break-word;
  line-height: 40px;
  padding: 0px;
  max-width: 116px;
  transition: unset;
  transform: scale(0.5) translateX(-50%) translateY(-100%);
  left: 50%;
  width: 116px;
  transform-origin: left center;
  opacity: 1;
}

.div-badge {
  width: 58px;
  background: rgb(238, 70, 70);
  border-radius: 5.5px;
  transition: unset;
}

.image-box {
  transition: unset;
  inset: 0px;
  background-size: cover;
  background-position: 50%;
  position: absolute;
  background-repeat: no-repeat;
}

.div-image {
  border-radius: 10.5px 10.5px 0px 0px;
  overflow: hidden;
  opacity: 1;
  /*width: 218px;*/
  height: 170px;
  /*filter: drop-shadow(rgb(148, 146, 146) 0px 3px 6px);*/
  transition: unset;
}

.div-img {
  transform: translate(0px, 0px) rotate(0deg);
  /*width: 218px;*/
  height: 170px;
  transition: unset;
  z-index: 0;
}

.a-card-style1 {
  width: 218px;
  position: relative;
  right: 5px;
  margin-bottom: 25px;
  border-radius: 10.5px;
  overflow: hidden;
}

.a-card-style {
  width: 218px;
  margin-bottom: 25px;
  border-radius: 10.5px;
  overflow: hidden;
}

.iconfont-style2 {
  float: right;
  font-size: 28px;
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
</style>