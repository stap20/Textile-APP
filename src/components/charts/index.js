import React, {useState} from 'react';
import {LineChart, PieChart, BarChart, GuageChart} from './components';

const chart = {
  line: LineChart,
  pie: PieChart,
  bar: BarChart,
  guage: GuageChart,
};

export default function Chart({
  config,
  type,
  title,
  isClickableFilter = true,
  ...other
}) {
  const ChartComp = chart[type];
  return (
    <ChartComp
      config={config}
      title={title}
      isClickableFilter={isClickableFilter}
      {...other}
    />
  );
}
