import VeggieCard from "../../standalone/veggieCard/veggieCard.vue";

const name = "Today";
const data = () => ({
  veggies: [
    {
      name: "Ail",
      type: "vegetable",
      months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      url:
        "https://dl.airtable.com/.attachmentThumbnails/946c5267252959d14370ff4431bfb03b/44a755ce"
    },
    {
      name: "Betterave",
      type: "vegetable",
      months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      url:
        "https://dl.airtable.com/.attachmentThumbnails/addb461c17f5d01c0db4ea4fdff8883b/e9b824f2"
    },
    {
      name: "Carotte",
      type: "vegetable",
      months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      url:
        "https://dl.airtable.com/.attachmentThumbnails/ed6608d1d7b3669d6d7f99417d9ac9fb/5912eced"
    }
  ]
});
const components = {
  VeggieCard
};
const methods = {};
const component = {
  name,
  data,
  methods,
  components
};
export default component;
