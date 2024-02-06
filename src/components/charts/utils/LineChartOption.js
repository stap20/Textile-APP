export function generateLineChartOption({
  xAxis,
  yAxis,
  chartData,
  filterVisibility,
  theme,
}) {
  const series = [];

  Object.keys(chartData).forEach(key => {
    if (filterVisibility[key]) {
      const value = chartData[key];
      series.push({
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 9,
        lineStyle: {
          width: 3,
        },
        ...value,
      });
    }
  });

  return {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: 50,
      top: 10,
      right: 10,
      bottom: 20,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      splitLine: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      nameLocation: 'middle',
      offset: 20,
      nameTextStyle: {
        color: theme.colors.primary,
        fontSize: 16,
        fontWeight: 500,
        padding: [25, 0, 0, 0],
      },
      axisLabel: {
        color: theme.colors.primary,
        align: 'center',
        fontSize: 14,
        fontWeight: 400,
        rotate: 90,
        margin: 10,
      },
      ...xAxis,
    },

    yAxis: {
      offset: 20,
      nameLocation: 'middle',
      nameTextStyle: {
        color: theme.colors.primary,
        fontSize: 16,
        fontWeight: 500,
        padding: [0, 0, 20, 0],
      },
      axisLabel: {
        color: theme.colors.primary,
        align: 'center',
        fontSize: 14,
        fontWeight: 400,
      },
      ...yAxis,
    },
    series: series,
  };
}

export function processLineChartData(chartData, theme) {
  const visibility = {};
  const filterData = Object.keys(chartData).map((key, idx) => {
    const {name, color, itemStyle = {}} = chartData[key];
    visibility[key] = true;

    return {
      title: name,
      id: key,
      color: color || itemStyle.color || theme.filterSymbolColors[idx],
    };
  });

  // object.entries will take object make it key value pair and to return it to object again need to make fromEntries
  const updatedChartData = Object.fromEntries(
    Object.entries(chartData).map(([key, value], idx) => {
      const {itemStyle = {}, lineStyle = {}, color, ...ele} = value;
      const currentColor =
        color || itemStyle.color || theme.filterSymbolColors[idx];

      return [
        key,
        {
          ...ele,
          itemStyle: {
            color: currentColor,
            ...itemStyle,
          },
          lineStyle: {color: currentColor, ...lineStyle},
        },
      ];
    }),
  );

  return {
    visibility,
    filterData,
    chartData: updatedChartData,
  };
}
