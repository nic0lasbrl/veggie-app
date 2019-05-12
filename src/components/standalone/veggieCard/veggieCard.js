import MonthChart from "../monthChart/monthChart.vue";
import { mapActions, mapState } from "vuex";

const name = "VeggieCard";
const methods = {
  openMonthChart: function() {
    this.displayMonthChart = true;
  },
  closeMonthChart: function() {
    this.displayMonthChart = false;
  },
  ...mapActions(["removeFromFavorites", "addToFavorites"])
};
const computed = {
  ...mapState(["favorites"]),
  isFavorite: function() {
    return !!this.favorites[this.name];
  }
};
const props = ["name", "imgUrl", "months"];
const component = {
  name,
  data: () => ({
    displayMonthChart: false
  }),
  computed,
  methods,
  props,
  components: { MonthChart }
};
export default component;
