<template>
  <div class="chart-demo">
    <!--  
      chartList: List Dữ liệu của từng trường
      listLabelData: Tên của từng trường
      titleValue: Tiêu đề của biểu đồ
      styles: Css cho biểu đồ (height, width, marginTop, marginBottom)
      noteX: Tên của trục hoành
      noteY: Tên của trục tung
      notePostion: Vị trí của ghi chú
    -->
    <ChartColumnCommon
      :chartList="listData"
      :listLabelData="listLabelData"
      :titleValue="title"
      :styles="styles"
      :noteX="noteX"
      :noteY="noteY"
      :notePostion="notePostion"
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
      listLabelData: [
        "Trường KTQD",
        "Trường bách khoa",
        "Trường điện lực",
        "Trường CĐ FPT",
        "Trường ĐH FPT",
        "Trường ĐH ngoại thương",
        "Trường Đh công đoàn",
        "Trường Đh quốc gia",
      ],
      listData: [
        {
          label: "2012",
          dataset: [5.5, 7.6, 9, 7, 8, 5, 9, 8],
        },
        {
          label: "2013",
          dataset: [7, 8, 9, 5, 8, 5, 5, 8],
        },
        {
          label: "2014",
          dataset: [7, 8, 9, 7.7, 8, 5, 7, 8],
        },
        {
          label: "2015",
          dataset: [5, 8, 9, 10, 8.1, 5, 6, 8],
        },
        {
          label: "2016",
          dataset: [7, 8, 8, 7, 8, 5, 9, 8],
        },
        {
          label: "2017",
          dataset: [7, 8, 8, 6, 8.4, 5, 7, 8],
        },
        {
          label: "2018",
          dataset: [7, 7, 7, 7.4, 8, 5.6, 8, 8],
        },
        {
          label: "2019",
          dataset: [6, 8, 8, 7, 8, 5, 5, 8],
        },
        {
          label: "2020",
          dataset: [8, 8, 8.4, 7, 8.2, 5, 9, 8],
        },
        {
          label: "2021",
          dataset: [8, 8, 5, 7.7, 8, 5, 9, 8],
        },
        {
          label: "2022",
          dataset: [7, 7, 6, 9, 8, 5.7, 4.1, 8],
        },
        {
          label: "2023",
          dataset: [4, 8, 6, 9, 8.2, 5, 8.5, 8],
        },
        {
          label: "2024",
          dataset: [4, 8, 8, 9, 8, 5, 4, 8.0],
        },
      ],
      notePostion: "bottom",
      title:
        "BIỂU ĐỒ ĐIỂM TRUNG BÌNH CỦA CÁC TRƯỜNG ĐẠI HỌC TỪ NĂM 2012 ĐẾN 2024",
      styles: {
        width: "75%",
        height: "650px",
      },
      noteX: "Năm học",
      noteY: "Điểm",
    };
  },
});
</script>
<style></style>
