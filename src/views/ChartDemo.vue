<template>
  <div class="chart-demo">
    <ChartColumnCommon
      :chartList="listData"
      :titleValue="title"
      :styles="styles"
      :noteX="noteX"
      :noteY="noteY"
      :listLabelData="listLabelData"
      :listColorData="listColorData"
    />
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
      listLabelData: ["Điểm toán", "Điểm hóa", "Điểm Văn"],
      listColorData: ["#f87979", "rgb(21, 106, 155)", "rgb(214, 99, 53)"],
      listData: [
        {
          label: "Sơn",
          dataset: [8, 5, 5],
        },
        {
          label: "Vinh",
          dataset: [10, 7, 6],
        },
        {
          label: "Hạnh",
          dataset: [7, 7, 8],
        },
        {
          label: "Thắng",
          dataset: [4, 7, 7],
        },
        {
          label: "Vinh",
          dataset: [10, 7, 2],
        },
        {
          label: "Hiệu",
          dataset: [6, 7, 4],
        },
      ],
      title: "Biểu đồ điểm toán và hóa của học sinh",
      styles: {
        width: "75%",
        height: "100px",
        marginTop: "100px",
      },
      noteX: "Họ và tên học sinh",
      noteY: "Điểm (%)",
    };
  },
});
</script>
<style>
</style>