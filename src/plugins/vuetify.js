import "@fortawesome/fontawesome-free/css/all.css";
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
  VTabsItems,
  VLayout,
  VContainer,
  VFlex,
  VIcon,
  VSpacer,
  VAppBar,
  VAppBarNavIcon,
  VToolbarTitle,
  VContent
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
    VTabsItems,
    VLayout,
    VContainer,
    VFlex,
    VIcon,
    VSpacer,
    VAppBar,
    VAppBarNavIcon,
    VToolbarTitle,
    VContent
  }
});

const opts = {
  icons: {
    iconfont: "fa"
  },
  theme: {
    themes: {
      light: {
        primary: "#42b983",
        secondary: "#8bc34a"
      }
    }
  }
};

export default new Vuetify(opts);
