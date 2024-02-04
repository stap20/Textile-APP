export function generatePieChartOption({
  chartData,
  colors,
  filterVisibility,
  theme,
  display = () => {},
}) {
  const data = chartData.map((item, idx) => {
    if (filterVisibility[item.id]) {
      return {
        name: display(item.value, item.name),
        value: item.value,
      };
    }
  });

  return {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['80%', '95%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 13,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
        color: colors,
      },
    ],
  };
}

export function processPieChartData(chartData, theme) {
  const visibility = {};
  var colors = [];
  const filterData = chartData.map((item, idx) => {
    const {name, id, color} = item;
    visibility[id] = true;

    colors.push(color || theme.filterSymbolColors[idx]);

    return {
      title: name,
      id: id,
      color: color || theme.filterSymbolColors[idx],
    };
  });

  const updatedChartData = chartData.map((item, idx) => {
    const {name, value, id, display} = item;

    return {
      name,
      value,
      id,
    };
  });

  return {
    visibility,
    filterData,
    chartData: updatedChartData,
    colors: colors,
  };
}
