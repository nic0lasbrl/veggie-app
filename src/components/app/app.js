import Airtable from "airtable";
import { mapActions } from "vuex";

const name = "App";

const base = new Airtable({
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY
}).base("appRElV7ur1veoctG");

const shapeVeggieRecord = (record, months) => {
  const [attachment] = record.get("Attachments") || [];

  const monthIds = months.map(month => month.id);
  const veggieMonths = record
    .get("Months")
    .map(monthId => monthIds.indexOf(monthId));

  return {
    name: record.get("Name"),
    nameEng: record.get("NameEng"),
    type: record.get("Type"),
    months: veggieMonths,
    url: attachment
      ? attachment.url
      : "https://cdn.pixabay.com/photo/2012/12/27/19/39/character-72718_640.jpg"
  };
};

const shapeMonthRecord = record => ({
  id: record.id,
  name: record.get("Name"),
  monthNumber: record.get("MonthNumber")
});

const getVeggieData = async months => {
  const veggies = [];
  const records = await base("Vegetables")
    .select({ view: "Grid view" })
    .firstPage();
  records.forEach(record => {
    veggies.push(shapeVeggieRecord(record, months));
  });
  return veggies;
};

const getMonths = async () => {
  const months = [];
  const records = await base("Months")
    .select({ view: "Grid view" })
    .firstPage();
  records.forEach(record => {
    months.push(shapeMonthRecord(record));
  });
  months.sort((a, b) => a["monthNumber"] - b["monthNumber"]);
  return months;
};

const methods = {
  ...mapActions(["setVeggies", "setMonths"])
};

const component = {
  name,
  methods,
  async created() {
    const months = await getMonths();
    this.setMonths(months);
    const veggies = await getVeggieData(months);
    this.setVeggies(veggies);
  }
};

export default component;
