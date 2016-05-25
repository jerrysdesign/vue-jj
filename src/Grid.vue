<style lang="less">

@import "./style/widget/jj_grid/jj_grid";

</style>

<template>

<div class="_grids">
  <a class="_grid js_grid" v-for="item in items" v-link="item.link">
    <p class="_grid_title">{{ item.no }}</p>
    <p class="_grid_label">{{ item.text }}</p>
  </a>
</div>

</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: []
    },
  },
}

</script>
