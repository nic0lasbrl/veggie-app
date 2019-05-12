import { mapActions } from "vuex";
const props = ["title"];

const methods = {
  ...mapActions(["shuffle"])
};

export default {
  methods,
  props
};
