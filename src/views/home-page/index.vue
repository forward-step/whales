<template>
    <navigation-bar />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import navigationBar from '@/views/home-page/components/navigation-bar/index.vue'

export default defineComponent({
    name: "HomePage",
    components: {
        navigationBar
    }
});
</script>

<style scoped>

</style>