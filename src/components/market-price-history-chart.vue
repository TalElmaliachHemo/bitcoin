<template>
  <Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="480"
    :height="320"
  />
</template>


<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default {
  name: "LineChart",
  components: { Line },
  props: {
    labels: {
      type: Array,
    },
    data: {
      type: Array,
    },
    description: {
      type: String,
    },
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {
        return {};
      },
    },
    plugins: {
      type: Array,
      default: () => {},
    },
    data: {
      type: Array,
    },
    labels: {
      type: Array,
    },
  },
  data() {
    return {
      chartData: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: ["lightblue"],
            label: this.description,
            borderColor: "lightblue",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
