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
  VFadeTransition,
  VTabs,
  VTab,
  VTabItem,
  VLayout,
  VContainer,
  VFlex,
  VIcon,
  VSpacer
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
    VFadeTransition,
    VTabs,
    VTab,
    VTabItem,
    VLayout,
    VContainer,
    VFlex,
    VIcon,
    VSpacer
  }
});

const opts = {
  icons: {
    iconfont: "mdi" // default
  }
};

export default new Vuetify(opts);