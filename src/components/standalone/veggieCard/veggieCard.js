import MonthChart from "../monthChart/monthChart.vue";

const name = "VeggieCard";
const methods = {};
const props = ["title", "imgUrl", "months"];
const component = {
  name,
  methods,
  props,
  components: { MonthChart }
};
export default component;
