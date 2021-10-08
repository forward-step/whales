<template>
    <animated-wallpaper :bg-img="bgImg" />
    <NavigationBar />
</template>

<script>
    import AnimatedWallpaper from "@/components/animated-wallpaper/index.vue";
    import {Image} from "@/common/entity/Image";

    import NavigationBar from '@/views/home-page/components/navigation-bar/index.vue'

    export default {
        name: "test",
        components: {
            AnimatedWallpaper,
            NavigationBar
        },
        data() {
            return {
                bgImg: Image.LGOIN
            }
        },
    }
</script>

<style scoped>

</style>