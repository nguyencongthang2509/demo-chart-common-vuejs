<template>
  <div class="chart-demo">
    <ChartColumnCommon
      :chartList="listData"
      :titleValue="title"
      :styles="styles"
      :noteX="noteX"
      :noteY="noteY"
      :listLabelData="listLabelData"
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
      listData: [
        {
          label: "Phạm Trường Sơn",
          dataset: [2, 8, 8],
        },
        {
          label: "Nguyễn Công Thắng",
          dataset: [8, 5, 9],
        },
        {
          label: "Nguyễn Văn Vinh",
          dataset: [8, 2, 8],
        },
        {
          label: "Phùng Việt Hùng",
          dataset: [7, 5, 5],
        },
        {
          label: "Nguyễn Quốc Huy",
          dataset: [10, 6, 5],
        },
        {
          label: "Nguyễn Quốc Huy",
          dataset: [3, 7, 3],
        },
        {
          label: "Nguyễn Quốc Huy",
          dataset: [9, 6, 5],
        },
      ],
      title: "Biểu đồ điểm toán và hóa của học sinh",
      styles: {
        width: "75%",
        height: "140px",
      },
      noteX: "Họ và tên học sinh",
      noteY: "Điểm (Đ)",
    };
  },
});
</script>
<style></style>
