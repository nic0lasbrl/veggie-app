import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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

export default new Vuex.Store({
  state,
  mutations,
  actions
});
