<template>
  <a-button type="primary">Primary Button</a-button>
    <a-row style="height: 30px;">
      <a-col :span="6">col-6</a-col>
      <a-col :span="12" style="background: black;">col-12</a-col>
      <a-col :span="6">col-6</a-col>
    </a-row>


</template>

<script>
    export default {
        name: "DynamicCarousel"
    }
</script>

<style scoped>

</style>