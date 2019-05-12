import Vue from "vue";
import Vuex from "vuex";
import localforage from "localforage";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: localforage
});

const state = {
  veggies: [],
  months: []
};

const mutations = {
  setVeggies(state, veggies) {
    state.veggies = [...veggies];
  },
  setMonths(state, months) {
    state.months = [...months];
  }
};

const actions = {
  setVeggies({ commit }, veggies) {
    commit("setVeggies", veggies);
  },
  setMonths({ commit }, months) {
    commit("setMonths", months);
  }
};

const getters = {
  fruits: state => state.veggies.filter(food => food.type === "fruit"),
  vegetables: state => state.veggies.filter(food => food.type === "vegetable"),
  cereals: state => state.veggies.filter(food => food.type === "cereal")
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins: [vuexLocal.plugin]
});
