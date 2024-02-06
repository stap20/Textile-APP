import {getGradientColorObj} from '../components/ChartWraper';

export function generateGuageChartOption({
  value,
  maxValue,
  theme,
  display = () => {},
}) {
  const gradientColor = [
    {offset: 0, color: '#B1B4B5'},
    {offset: 1, color: '#3C4446'},
  ];

  // Create ECharts graphic.LinearGradient
  const echartsLinearGradient = getGradientColorObj(gradientColor);

  return {
    series: [
      {
        name: 'Speed Rate',
        type: 'gauge',
        radius: "95%",
        min: 0,
        max: maxValue,
        splitNumber: 8,
        progress: {
          show: true,
          width: 15,
          roundCap: true,
          itemStyle: {
            color: echartsLinearGradient,
          },
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 15,
            color: [[1, theme.colors.primary + '33']],
          },
        },
        axisLabel: {
          distance: 25, // Adjust the distance between labels and the axis line
          color: theme.colors.primary,
          fontSize: 14,
        },
        splitLine: {
          length: 10, // Adjust the length of the split lines
          roundCap: true,
        },
        pointer: {
          offsetCenter: [0, 6],
          itemStyle: {
            color: echartsLinearGradient,
          },
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 18,
        },
        detail: {
          offsetCenter: [0, '90%'],
          valueAnimation: true,
          color: theme.colors.primary,
          fontSize: 16,
          fontWeight: '600',
          formatter: '{value} rpm',
        },
        data: [
          {
            value: value,
          },
        ],
      },
    ],
  };
}
