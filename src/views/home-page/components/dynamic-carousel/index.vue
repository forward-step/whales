<template>
<!--  <a-button type="primary">Primary Button</a-button>-->
<!--    <a-row style="height: 30px;text-align: center">-->
<!--      <a-col :span="3">col-3</a-col>-->
<!--      <a-col :span="18" style="background: lightyellow;">col-18</a-col>-->
<!--      <a-col :span="3">col-3</a-col>-->
<!--    </a-row>-->

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


</template>

<script>
    import { defineComponent } from 'vue';
    import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

    export default defineComponent({
        name: "DynamicCarousel",
        components: {
          LeftCircleOutlined,
          RightCircleOutlined,
        },
    })
</script>

<style scoped>
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