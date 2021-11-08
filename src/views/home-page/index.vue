<template>
<!--    <navigation-bar />-->
    <dynamic-dynamic />
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