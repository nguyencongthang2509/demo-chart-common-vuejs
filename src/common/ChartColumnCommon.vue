<template>
  <div>
    <h1>{{ title }}</h1>
    <div
      class="chart-common"
      :style="{
        width: String(stylesCommon.width),
        marginTop: String(stylesCommon.marginTop),
      }"
    >
      <Bar :data="data" :options="options" :height="stylesCommon.height" />
    </div>
  </div>
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
  ChartOptions,
} from "chart.js";
import ChartJSPluginDatalabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ChartJSPluginDatalabels,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ItemList {
  label?: any;
  dataset?: any;
}

interface ChartData {
  labels?: any;
  datasets?: any;
}

interface StyleList {
  height?: String;
  width?: String;
  marginTop?: String;
  marginBottom?: String;
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
    styles: {
      type: Object as () => StyleList,
      default: () => ({}),
    },
    titleValue: String,
    noteX: String,
    noteY: String,
    listLabelData: {
      type: Array as () => Array<String>,
      required: true,
    },
  },
  data(): {
    data: ChartData;
    options: ChartOptions;
    title: String;
    stylesCommon: StyleList;
  } {
    const datasets = this.listLabelData.map((label) => ({
      label: label,
      backgroundColor: "",
      data: [],
    }));
    return {
      data: {
        labels: [],
        datasets: datasets,
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
            title: {
              display: true,
              text: this.noteX,
            },
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: this.noteY,
            },
          },
        },
        plugins: {
          datalabels: {
            display: true,
            color: "black",
            anchor: "center",
            align: "center",
            font: {
              weight: "bold",
              size: 14,
            },
            formatter: (value, context) => {
              return value;
            },
          },
        },
      } as ChartOptions,
      stylesCommon: {},
      title: "",
    };
  },
  watch: {
    chartList: {
      handler(newList) {
        this.data.labels = newList.map((item: ItemList) => item.label);

        this.data.datasets = this.listLabelData.map((label, index) => ({
          label: label,
          backgroundColor: "",
          data: newList.map((item: ItemList) => item.dataset[index]),
        }));
      },
      immediate: true,
    },
    listLabelData: {
      handler(newList) {
        const numLabels = Math.min(newList.length, this.data.datasets.length);
        for (let i = 0; i < numLabels; i++) {
          this.data.datasets[i].label = newList[i];
        }
      },
      immediate: true,
    },
  },
  created() {
    if (this.titleValue !== undefined) {
      this.title = this.titleValue;
    }
    this.stylesCommon = this.styles;
  },
  methods: {
    getRandomColor(): string {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      if (/^#(FFF|FDF|F0F|EDE|DDD|DFD|FEF)$/.test(color)) {
        color = this.getRandomColor();
      }
      return color;
    },
    generateRandomColors() {
      let listColorData: Array<string> = [];

      this.listLabelData.forEach(() => {
        let value = this.getRandomColor();
        listColorData.push(value);
      });

      const numBackgroundColors = Math.min(
        listColorData.length,
        this.data.datasets.length
      );
      for (let i = 0; i < numBackgroundColors; i++) {
        this.data.datasets[i].backgroundColor = listColorData[i];
      }
    },
  },
  beforeMount() {
    this.generateRandomColors();
  },
});
</script>

<style>
.chart-common {
  margin-left: auto;
  margin-right: auto;
}
</style>
