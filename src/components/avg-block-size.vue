<template>
  <section class="avg-block-size" v-if="avgBlockSize">
    <AvgBlockSizeChart
      :labels="getLabels"
      :data="getData"
      :description="avgBlockSize.description"
    />
  </section>
</template>

<script>
import { bitcoinService } from "../services/bitcoin.service";
import AvgBlockSizeChart from "./avg-block-size-chart.vue";
export default {
  data() {
    return {
      avgBlockSize: null,
    };
  },
  async created() {
    const avgBlockSize = await bitcoinService.getAvgBlockSize();
    this.avgBlockSize = avgBlockSize;
  },
  computed: {
    getLabels() {
      const labels = this.avgBlockSize.values.map((value) => {
        const date = new Date(value.x);
        return date.toLocaleDateString("en-US");
      });
      return labels;
    },
    getData() {
      return this.avgBlockSize.values.map((value) => value.y);
    },
  },
  components: {
    AvgBlockSizeChart,
  },
};
</script>