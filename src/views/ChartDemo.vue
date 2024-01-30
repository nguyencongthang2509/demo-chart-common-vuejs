<template>
  <div class="chart-demo">
    <h1>This is Chart Demo</h1>
    <ChartColumnCommon />
  </div>
</template>

<script lang="ts">
import ChartColumnCommon from '@/common/ChartColumnCommon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChartDemo',
  components: {
    ChartColumnCommon,
  },
});
</script>