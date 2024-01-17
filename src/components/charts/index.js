import React, {useState} from 'react';
import {LineChart} from './components';

const chart = {
  line: LineChart,
};
export default function Chart({config, type, title}) {
  const ChartComp = chart[type];
  return <ChartComp config={config} title={title} />;
}
