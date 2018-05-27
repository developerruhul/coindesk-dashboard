import Chart from "chart.js";

var chart = document.getElementById("chart").getContext("2d"),
  gradient = chart.createLinearGradient(0, 0, 0, 350);

gradient.addColorStop(0, "rgba(0, 72, 253, 0.54)");
gradient.addColorStop(0.5, "rgba(0, 72, 253, 0.24)");
gradient.addColorStop(1, "rgba(255, 255, 255, 0.5)");

Chart.defaults.global.defaultFontFamily = "Open Sans";

var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Income/Expence",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 3,
      borderColor: "#205df9",
      data: [5, 32, 13, 29, 36, 11, 36]
    }
  ]
};

var options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    easing: "easeInOutQuad",
    duration: 520
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: true,
          fontStyle: "bold",
          fontSize: 12
        }
      }
    ],
    yAxes: [
      {
        position: "right",
        gridLines: {
          color: "rgba(0, 0, 0, 0.05)",
          lineWidth: 2,
          zeroLineColor: "transparent"
        },
        ticks: {
          display: true,
          fontStyle: "bold",
          fontSize: 12,
          beginAtZero: true,
          callback: function(value) {
            return "$" + value + "k";
          },
          autoSkip: true,
          maxTicksLimit: 5
        }
      }
    ]
  },
  elements: {
    line: {
      tension: 0.4
    }
  },
  legend: {
    display: false
  },
  point: {
    backgroundColor: "blue"
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.4)",
    titleFontColor: "white",
    caretSize: 0,
    cornerRadius: 14,
    xPadding: 10,
    yPadding: 10
  }
};

var chartInstance = new Chart(chart, {
  type: "line",
  data: data,
  options: options
});
