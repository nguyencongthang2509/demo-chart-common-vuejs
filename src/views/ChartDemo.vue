<template>
  <div class="chart-demo">
    <h1>This is Chart Demo</h1>
    <ChartColumnCommon :chartList="listData" />
  </div>
</template>

<script lang="ts">
import ChartColumnCommon from "@/common/ChartColumnCommon.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChartDemo",
  components: {
    ChartColumnCommon,
  },
  data() {
    return {
      listData: [
        {
          label: "January",
          dataset: 40,
        },
        {
          label: "February",
          dataset: 20,
        },
        {
          label: "March",
          dataset: 12,
        },
        {
          label: "January",
          dataset: 40,
        },
        {
          label: "February",
          dataset: 20,
        },
        {
          label: "March",
          dataset: 12,
        },
      ],
    };
  },
});
</script>
