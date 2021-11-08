<template>
    <navigation-bar />

  <a-row style="height: 30px;text-align: center">
    <a-col :span="3"></a-col>
    <a-col :span="18">
      <dynamic-dynamic />
    </a-col>
    <a-col :span="3"></a-col>
  </a-row>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

import navigationBar from '@/views/home-page/components/navigation-bar/index.vue'
import dynamicDynamic from '@/views/home-page/components/dynamic-carousel/index.vue'

export default defineComponent({
    name: "HomePage",
    components: {
        navigationBar,
        dynamicDynamic
    }
});
</script>

<style scoped>

</style>