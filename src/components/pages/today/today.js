import VeggieCard from "../../standalone/veggieCard/veggieCard.vue";
import { mapState } from "vuex";

const name = "Today";
const currentMonth = new Date().getMonth();
const data = () => ({
  currentMonth
});
const computed = {
  ...mapState(["veggies"])
};
const components = {
  VeggieCard
};
const methods = {};
const component = {
  name,
  data,
  computed,
  methods,
  components
};
export default component;
