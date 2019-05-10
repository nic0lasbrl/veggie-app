import { Chart } from "highcharts-vue";
import { mapState } from "vuex";

const chartOptions = function() {
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: "transparent"
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
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "100%"],
        size: "200%"
      }
    },
    series: [
      {
        type: "pie",
        name: "Browser share",
        innerSize: "50%",
        data: this.chartData
      }
    ]
  };
};

const chartData = function() {
  const data = this.rawMonths.map(month => ({
    name: month.name,
    y: 1,
    color: "crimson",
    dataLabels: {
      enabled: false
    }
  }));
  this.vegMonths.forEach(i => {
    data[i].color = "limegreen";
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
