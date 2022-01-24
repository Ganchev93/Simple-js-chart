function chart1() {
  const ctx = document.getElementById("myChart").getContext("2d");

  var delayed;

  //Gradient fill
  let gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(58,123,213,1)");
  gradient.addColorStop(1, "rgba(0,210,250,0.3)");

  let gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, "rgba(229, 255,0,1)");
  gradient2.addColorStop(1, "rgba(251, 255, 0, 0.849");

  const labels = [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [
          9251, 10244, 11420, 11666, 11883, 12112, 12836, 13450, 14361, 15088,
        ],
        label: "Приходи  на домакинство",
        fill: true,
        backgroundColor: gradient,
        borderColor: "#fff",
        pointBackgroundColor: "rgb(189, 195, 199)",
        tension: 0.4,
      },
      {
        data: [
          8547, 9607, 10595, 10929, 11194, 11146, 11989, 12910, 13538, 13403,
        ],
        label: "Разходи на домакинство",
        fill: true,
        backgroundColor: gradient2,
        borderColor: "#fff",
        pointBackgroundColor: "rgb(189, 195, 199)",
        tension: 0.4,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      radius: 5,
      hitRadius: 20,
      hoverRadius: 13,
      responsive: true,
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (
            context.type === "data" &&
            context.mode === "default" &&
            !delayed
          ) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return value + "лв";
            },
            color: "rgb(51, 51, 51)",
            font: {
              size: 15,
            },
          },
        },

        x: {
          ticks: {
            color: "rgb(51, 51, 51)",
            font: {
              size: 15,
            },
          },
        },
      },
    },
  };

  const myChart2 = new Chart(ctx, config);
}
function chart2() {
  const ctx2 = document.getElementById("myChart2").getContext("2d");

  //Gradient fill
  let gradient = ctx2.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(31, 185, 77, 0.308)");
  gradient.addColorStop(1, "rgba(44, 240, 102, 0.3)");

  let gradient2 = ctx2.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, "rgba(253, 171, 233, 0.849)");
  gradient2.addColorStop(1, "rgba(250, 109, 215, 0.849)");

  const labels = [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  const data2 = {
    labels,
    datasets: [
      {
        data: [3782, 4327, 4814, 4813, 4953, 5167, 5586, 6013, 6592, 7002],
        label: "Приходи на лице",
        fill: true,
        backgroundColor: gradient,
        borderColor: "#fff",
        pointBackgroundColor: "rgb(189, 195, 199)",
        tension: 0.4,
      },
      {
        data: [3494, 4058, 4466, 4509, 4666, 4755, 5217, 5772, 6214, 6220],
        label: "Разходи на лице",
        fill: true,
        backgroundColor: gradient2,
        borderColor: "#fff",
        pointBackgroundColor: "rgb(189, 195, 199)",
        tension: 0.4,
      },
    ],
  };

  var delayed;
  const config2 = {
    type: "line",
    data: data2,
    options: {
      radius: 5,
      hitRadius: 20,
      hoverRadius: 13,
      responsive: true,
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (
            context.type === "data" &&
            context.mode === "default" &&
            !delayed
          ) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }

          return delay;
        },
      },
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return value + "лв";
            },
            color: "rgb(51, 51, 51)",
            font: {
              size: 15,
            },
          },
        },

        x: {
          ticks: {
            color: "rgb(51, 51, 51)",
            font: {
              size: 15,
            },
          },
        },
      },
    },
  };

  const myChart = new Chart(ctx2, config2);
}

chart2();

chart1();
