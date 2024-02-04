import React, {useState} from 'react';
import {LineChart, PieChart,BarChart} from './components';

const chart = {
  line: LineChart,
  pie: PieChart,
  bar: BarChart,
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
