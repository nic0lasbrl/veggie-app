import { Chart } from "highcharts-vue";
import { mapState } from "vuex";

const currentMonth = new Date().getMonth();

const chartOptions = function() {
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: "transparent",
      margin: 0
    },
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: ""
    },
    title: {
      text: ""
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white"
          }
        },
        startAngle: -170,
        endAngle: 170,
        center: ["50%", "50%"],
        size: "100%",
        animation: 0,
        slicedOffset: 7
      }
    },
    series: [
      {
        name: "Browser share",
        innerSize: "50%",
        data: this.chartData,
        type: "pie"
      }
    ]
  };
};

const chartData = function() {
  const data = this.rawMonths.map((month, index) => {
    return {
      name: month.name,
      y: 1,
      sliced: index === currentMonth,
      color: "crimson",
      dataLabels: {
        enabled: false
      }
    };
  });
  this.vegMonths.forEach(i => {
    data[i].color = "#42b983";
  });
  return data;
};

const computed = {
  ...mapState({ rawMonths: "months" }),
  chartOptions,
  chartData
};
const props = ["vegMonths"];

export default {
  props,
  computed,
  components: {
    highcharts: Chart
  }
};
