<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts">
import { Bar } from "vue-chartjs";
import { defineComponent } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ItemList {
  label: any;
  dataset: any;
}

interface ChartData {
  labels: any;
  datasets: any;
}

export default defineComponent({
  name: "ChartColumnCommon",
  components: {
    Bar,
  },
  props: {
    chartList: {
      type: Array as () => Array<ItemList>,
      required: true,
    },
  },
  data(): { data: ChartData; options: { responsive: boolean } } {
    return {
      data: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
      },
      options: {
        responsive: true,
      },
    };
  },
  watch: {
    chartList: {
      handler(newList) {
        // Update labels and datasets when chartList changes
        this.data.labels = newList.map((item: ItemList) => item.label);
        this.data.datasets[0].data = newList.map(
          (item: ItemList) => item.dataset
        );

        // Log updated data to console (optional)
        console.log(this.data.labels);
        console.log(this.data.datasets);
      },
      immediate: true,
    },
  },
  methods: {},
});
</script>
