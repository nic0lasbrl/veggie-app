import VeggieCard from "../../standalone/veggieCard/veggieCard.vue";
import { mapGetters } from "vuex";

const name = "Today";
const currentMonth = new Date().getMonth();
const data = () => ({
  currentMonth
});
const computed = {
  ...mapGetters(["fruits", "vegetables", "cereals"])
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
