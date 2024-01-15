import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as echarts from 'echarts/core';
import {
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart,
} from 'echarts/charts';
import {
  GridSimpleComponent,
  GridComponent,
  PolarComponent,
  RadarComponent,
  GeoComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  AxisPointerComponent,
  BrushComponent,
  TitleComponent,
  TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendComponent,
  LegendScrollComponent,
  LegendPlainComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  AriaComponent,
  TransformComponent,
} from 'echarts/components';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import SvgChart, {SVGRenderer} from '@wuba/react-native-echarts/svgChart';

export function getGradientColorObj(colors){
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, colors)
}
echarts.use([
  GridSimpleComponent,
  GridComponent,
  PolarComponent,
  RadarComponent,
  GeoComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  AxisPointerComponent,
  BrushComponent,
  TitleComponent,
  TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendComponent,
  LegendScrollComponent,
  LegendPlainComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  AriaComponent,
  TransformComponent,

  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart,

  SVGRenderer,
]);

function ChartWraper({option}) {
  const instance = useRef(null);
  const [parentLayout, setParentLayout] = useState({});

  const handleLayout = event => {
    const {width, height} = event.nativeEvent.layout;
    setParentLayout({width, height});
  };

  const {width, height} = parentLayout;

  // Render ChartWraper only when width and height are available
  const shouldRenderChart = width !== undefined && height !== undefined;

  useEffect(() => {
    let chart;
    if (instance.current && width != undefined) {
      // @ts-ignore
      chart = echarts.init(instance.current, '    ', {
        renderer: 'svg',
        width: width,
        height: height,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [option, parentLayout]);

  return (
    <View style={styles.container} onLayout={handleLayout}>
      {shouldRenderChart && <SvgChart ref={instance} useRNGH />}
    </View>
  );
}

export default gestureHandlerRootHOC(ChartWraper);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
