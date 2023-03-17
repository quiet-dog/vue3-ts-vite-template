<template>
    <svg class="icon">
      <use :xlink:href="`#${props.iconClass}`" :fill="props.color"></use>
    </svg>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps({
    iconClass: {
      type: String,
      required: true,
    },
    color:{
      type:String,
      default:'#000000'
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .icon {
    vertical-align: -0.15em;
    overflow: hidden;
  }
  </style>
  