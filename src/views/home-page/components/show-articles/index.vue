<template>
  <a-row style="margin-top: 30px;margin-bottom: 4px">
    <a-col :span="1" style="text-align: right">
      <a-avatar :src=hotIssueImg size="large" />
    </a-col>
    <a-col :span="5">
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
    <a-col :span="10">
<!--      <iconfont type="icon-fabu" class="iconfont-style2" />-->
      <ReloadOutlined class="iconfont-style2" />
    </a-col>
  </a-row>

</template>

<script>
  import { defineComponent, ref } from 'vue';
  import {Image} from "@/common/entity/show-articles/Image";
  import { ReloadOutlined } from '@ant-design/icons-vue';

  export default defineComponent({
    name: "ShowArticles",
    setup() {
      const hotIssueImg = Image.HOTISSUE;

      return {
        hotIssueImg
      }
    },
    components: {
      ReloadOutlined
    }
  })
</script>

<style scoped>
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
</style>