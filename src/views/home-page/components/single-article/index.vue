<template>
  <div class="article-card">
    <div class="article-card-image">
      <div class="div-img" :style="imgStyle">
        <div class="div-image" :style="imgStyle">
          <div class="image-box" :style="articleImgStyle"></div>
        </div>
      </div>
    </div>
    <div class="article-card-text">
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
      <p style="text-align: right"> - -摘自网络</p>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import {ImgUtil} from "@/common/util/ImgUtil";
  import {Image} from "@/common/entity/single-article/Image";

  export default defineComponent({
    name: "SingleArticle",
    setup() {
      const articleImgStyle = ImgUtil.getBackImgUrl(Image.ARTICLEONE);
      const imgStyle = ImgUtil.getImgHeight(Image.ARTICLEONE);

      return {
        articleImgStyle,
        imgStyle
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
}

.article-card:hover {
  filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px -2px 4px);
  transition: all 0.3s;
}

.article-card-image {

}

.article-card-text {
  background: white;
  padding: 12px;
  position: relative;
}

.div-article {
  font-size: 14px;
  font-family: arial;
  text-align: left;
  color: rgb(51, 51, 51);
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
  background: rgb(238, 70, 70);
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