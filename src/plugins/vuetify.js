import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify, {
  VApp,
  VCard,
  VImg,
  VCardTitle,
  VCardText,
  VCardActions,
  VBtn,
  VFadeTransition
} from "vuetify/lib";
import "vuetify/src/styles/main.sass";

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VImg,
    VCardTitle,
    VCardText,
    VCardActions,
    VBtn,
    VFadeTransition
  }
});

const opts = {
  icons: {
    iconfont: "mdi" // default
  }
};

export default new Vuetify(opts);
