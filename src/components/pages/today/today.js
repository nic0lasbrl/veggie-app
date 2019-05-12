import VeggieCard from "../../standalone/veggieCard/veggieCard.vue";
import AppBar from "../../standalone/appBar/appBar.vue";
import { mapGetters } from "vuex";

const name = "Today";
const currentMonth = new Date().getMonth();
const data = () => ({
  currentMonth,
  foodCategories: ["Vegetables", "Fruits", "Cereals"]
});
const computed = {
  ...mapGetters([
    "favFruits",
    "notFavFruits",
    "favVegetables",
    "notFavVegetables",
    "favCereals",
    "notFavCereals"
  ]),
  food: function() {
    const food = {};
    for (const foodCategory of this.foodCategories) {
      food[foodCategory] = {
        fav: this["fav" + foodCategory],
        notFav: this["notFav" + foodCategory]
      };
    }
    return food;
  }
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
