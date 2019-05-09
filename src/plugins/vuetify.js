import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify, {
  VApp,
  VCard,
  VImg,
  VCardTitle,
  VCardText,
  VCardActions,
  VBtn
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
    VBtn
  }
});

const opts = {
  icons: {
    iconfont: "mdi" // default
  }
};

export default new Vuetify(opts);
