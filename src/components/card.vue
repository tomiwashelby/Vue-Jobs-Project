<script setup>
  import { defineProps } from 'vue';

  defineProps({
    bg: {
      type: String,
      default: 'bg-gray-100'
    }
  })
</script>
<template>
   <div :class="`${bg} p-6 rounded-lg shadow-md flex flex-col justify-between`">
    <slot></slot>
   </div>
</template>