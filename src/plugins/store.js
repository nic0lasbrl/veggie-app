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
  months: [],
  favorites: {}
};

const mutations = {
  setVeggies(state, veggies) {
    state.veggies = [...veggies];
  },
  setMonths(state, months) {
    state.months = [...months];
  },
  addToFavorites(state, foodID) {
    state.favorites = { ...state.favorites, [foodID]: true };
  },
  removeFromFavorites(state, foodID) {
    state.favorites = { ...state.favorites, [foodID]: false };
  }
};

const actions = {
  setVeggies({ commit }, veggies) {
    commit("setVeggies", veggies);
  },
  setMonths({ commit }, months) {
    commit("setMonths", months);
  },
  addToFavorites({ commit }, foodID) {
    commit("addToFavorites", foodID);
  },
  removeFromFavorites({ commit }, foodID) {
    commit("removeFromFavorites", foodID);
  }
};

const getters = {
  fruits: state => state.veggies.filter(food => food.type === "fruit"),
  favFruits: (state, getters) =>
    getters.fruits.filter(food => !!state.favorites[food.name]),
  notFavFruits: (state, getters) =>
    getters.fruits.filter(food => !state.favorites[food.name]),
  vegetables: state => state.veggies.filter(food => food.type === "vegetable"),
  favVegetables: (state, getters) =>
    getters.vegetables.filter(food => !!state.favorites[food.name]),
  notFavVegetables: (state, getters) =>
    getters.vegetables.filter(food => !state.favorites[food.name]),
  cereals: state => state.veggies.filter(food => food.type === "cereal"),
  favCereals: (state, getters) =>
    getters.cereals.filter(food => !!state.favorites[food.name]),
  notFavc: (state, getters) =>
    getters.cereals.filter(food => !state.favorites[food.name])
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins: [vuexLocal.plugin]
});
