import MonthChart from "../monthChart/monthChart.vue";

const name = "VeggieCard";
const methods = {
  openMonthChart: function() {
    this.displayMonthChart = true;
  },
  closeMonthChart: function() {
    this.displayMonthChart = false;
  }
};
const props = ["title", "imgUrl", "months"];
const component = {
  name,
  data: () => ({
    displayMonthChart: false
  }),
  methods,
  props,
  components: { MonthChart }
};
export default component;
