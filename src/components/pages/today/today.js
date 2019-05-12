import VeggieCard from "../../standalone/veggieCard/veggieCard.vue";
import AppBar from "../../standalone/appBar/appBar.vue";
import { mapGetters } from "vuex";

const name = "Today";
const currentMonth = new Date().getMonth();
const data = () => ({
  currentMonth
});
const computed = {
  ...mapGetters([
    "favFruits",
    "notFavFruits",
    "favVegetables",
    "notFavVegetables",
    "favCereals",
    "notFavCereals"
  ])
};
const components = {
  VeggieCard,
  AppBar
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
