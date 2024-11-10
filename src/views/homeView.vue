<script setup>
  import hero from '@/components/hero.vue';
  import homeCards from '@/components/homeCards.vue';
  import jobsListing from '@/components/jobsListing.vue';
</script>

<template>
  <hero />
  <homeCards />
  <jobsListing :limit="3" :showButton="true" />
</template>