<template>
  <a-row style="margin-top: 30px;margin-bottom: 4px">
    <a-col :span="1" style="text-align: center">
      <a-avatar class="a-avatar-style" :src=newestImg size="large" />
    </a-col>
    <a-col :span="3">
      <div class="recommend-style">
        <div style="text-align: left">
        <span class="recommend-font-style">
          最新瞬间
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
    <a-col :span="4" ref="content">
      <single-article v-for="(article, i) in articleList[0]" :article="article" :key="i" />
    </a-col>

    <a-col :span="1"></a-col>
    <a-col :span="4">
      <single-article v-for="(article, i) in articleList[1]" :article="article" :key="i" />
    </a-col>

    <a-col :span="1"></a-col>
    <a-col :span="4">
      <single-article v-for="(article, i) in articleList[2]" :article="article" :key="i" />
    </a-col>

    <a-col :span="1"></a-col>
    <a-col :span="4">
      <single-article v-for="(article, i) in articleList[3]" :article="article" :key="i" />
    </a-col>

    <a-col :span="1"></a-col>
    <a-col :span="4">
      <single-article v-for="(article, i) in articleList[4]" :article="article" :key="i" />
    </a-col>
  </a-row>

  <div class="div-outlined-style">
    <DoubleRightOutlined style="width: 45px; height: 45px; -webkit-transform: rotate(90deg);" @click="addArticle()" />
  </div>

</template>

<script>
  import { defineComponent, ref } from 'vue';
  import {DataUtil} from "@/common/util/DataUtil";
  import {Image} from "@/common/entity/newest-articles/Image";
  import { ReloadOutlined, SettingOutlined, EditOutlined, EllipsisOutlined, DoubleRightOutlined } from '@ant-design/icons-vue';
  import singleArticle from "@/views/home-page/components/single-article/index.vue";

  export default defineComponent({
    name: "NewestArticles",
    data() {
      return {
        num: 0,
        newestImg: Image.NEWEST,
        articleList: DataUtil.getArticleList()
      }
    },
    components: {
      ReloadOutlined,
      SettingOutlined,
      EditOutlined,
      EllipsisOutlined,
      DoubleRightOutlined,
      singleArticle
    },
    methods: {
      addArticle: function () {
        let articles = DataUtil.getArticleByNum(this.num++);
        for (let i = 0; i < 5; i++) {
          this.articleList[i].push(articles[i]);
        }

        if (this.num === 2) {
          this.num = 0;
        }
        // DataUtil.scrollToButtom(this);
      }
    }
  })
</script>

<style scoped>

:deep(.ant-avatar-lg) {
  width: 88px;
  height: 50px;
  line-height: 50px;
  border-radius: 0;
}

.a-avatar-style {
  position: relative;
  right: 43px;
  bottom: 8px;
}

.div-outlined-style {
  width: 100%;
  text-align: center;
  font-size: 45px;
  color: rgb(133, 131, 131);
  margin-bottom: 0;
  opacity: 1;
}

.div-outlined-style:hover {
  opacity: 0.5;
  transition: 0.5s;
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