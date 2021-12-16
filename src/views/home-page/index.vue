<template>

  <div :style="style">
    <navigation-bar />

    <a-row style="height: 30px;text-align: center">
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <dynamic-dynamic />
        <show-articles />
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

import navigationBar from '@/views/home-page/components/navigation-bar/index.vue'
import dynamicDynamic from '@/views/home-page/components/dynamic-carousel/index.vue'
import showArticles from '@/views/home-page/components/show-articles/index.vue'

export default defineComponent({
    name: "HomePage",
    setup() {
      const screenWidth = document.documentElement.clientWidth;
      const screenHeight = document.documentElement.clientHeight;
      console.log("setup -> screenWidth: " + screenWidth + " ==============");
      console.log("setup -> screenHeight: " + screenHeight + " ==============");
      const style = {
        width: screenWidth + "px"
      };

      return {
        screenWidth,
        screenHeight,
        style
      }
    },
    components: {
        navigationBar,
        dynamicDynamic,
        showArticles
    }
});
</script>

<style scoped>

@import "../../assets/resources/home-page/css/style.css";

</style>