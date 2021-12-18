<template>
  <div class="article-card">
    <div class="article-card-image">
      <div class="div-img" :style="article.style.articleImg">
        <div class="div-image" :style="article.style.articleImg">
          <div class="image-box" :style="article.style.backImg"></div>
        </div>
      </div>
    </div>
    
    <div class="article-card-text">
      <div class="div-badge" :style="article.style.badge">
        <span class="span-badge">{{article.text.badge}}</span>
      </div>
      <div class="div-month">
        <span class="span-month">SEPTEMBER 30TH</span>
      </div>
      <div class="div-title">
        <span>{{article.text.title}}</span>
      </div>
      <div v-html="article.text.content" class="div-article" :style="article.style.articleText"></div>
    </div>
    
    <div class="article-card-message">
      <a-row>
        <a-col :span="1"></a-col>
        <a-col :span="6">
          <iconfont type="icon-yanjing" class="iconfont-style" />
          <span class="span-num">{{article.number.pageViews}}</span>
        </a-col>
        <a-col :span="6">
          <iconfont type="icon-duihuaqipao" class="iconfont-style" />
          <span class="span-num">{{article.number.comments}}</span>
        </a-col>
        <a-col :span="6">
          <iconfont type="icon-dianzan" class="iconfont-style" />
          <span class="span-num">{{article.number.tags}}</span>
        </a-col>
        <a-col :span="4">
          <iconfont type="icon-cuowu3" class="iconfont-style" />
        </a-col>
        <a-col :span="1"></a-col>
      </a-row>
      <a-row style="height: 83px;">
        <a-col :span="12">
          <div class="label-style">
            <iconfont type="icon-fenxiang1" style="padding-right: 10px; font-size: 16px;" />
            <span>分享</span>
          </div>
          <a-divider type="vertical" class="a-divider-style" />
        </a-col>
        <a-col :span="12">
          <div class="label-style">
            <span style="color: rgb(119, 119, 119);">发布人：xxx</span>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import {DataUtil} from "@/common/util/DataUtil";

  export default defineComponent({
    name: "SingleArticle",
    props: {
      article: {
        type: Object,
        default: DataUtil.getDefaultArticle()
      }
    }
  });
</script>

<style scoped>

  .article-card {
    width: 100%;
    border-radius: 10.5px;
    overflow: hidden;
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px -1px 2px);
    margin-bottom: 35px;
  }

  .article-card:hover {
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px -2px 4px);
    transition: all 0.3s;
  }

  .article-card-image {
    /*border-bottom: 1px;*/
    /*border-bottom-style: solid;*/
    /*border-bottom-color: rgb(240, 240, 240);*/
  }

  .article-card-text {
    background: white;
    padding: 12px;
    position: relative;
  }
  
  .article-card-message {
    width: 100%;
    background: white;
  }
  
  .label-style {
    font-size: 15px;
    font-family: SimSun, STSong;
    text-align: center;
    color: rgb(7, 7, 7);
    line-height: 100px;
  }
  
  .iconfont-style {
    font-weight: bold;
    font-size: 17px;
    color: rgba(0, 0, 0, 1);
    position: relative;
    top: 2px;
  }
  
  .span-num {
    font-family: SimSun, STSong;
    color: rgb(148, 146, 146);
  }
  
  .a-divider-style {
    position: absolute;
    right: 0;
    top: 20px;
    border-color: rgb(119, 119, 119);
    margin: 0;
    border-left-width: 1px;
    height: 90px;
  }

  .div-article {
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", "WenQuanYi Micro Hei", sans-serif;
    text-align: left;
    color: rgb(100, 100, 100);
  }

  .div-title {
    font-size: 20px;
    font-family: "Ek Mukta", sans-serif;
    text-align: left;
    color: rgb(7, 7, 7);
    font-weight: bold;
    padding-bottom: 10px;
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
    position: relative;
    top: 10px;
    left: 65px;
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
    background: rgb(70, 238, 169);
    border-radius: 5.5px;
    transition: unset;
    position: absolute;
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
</style>