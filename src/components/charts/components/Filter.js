import React from 'react';
import {View} from 'react-native';
import {filterStyle} from '@styles/components/charts';
import FilterButton from './FilterButton';

export default function Filter({
  data,
  onToggle,
  numberOfRows,
  isTopView = true,
  isClickable = true,
}) {
  const styles = filterStyle();

  const filterGrid = [];

  if (isTopView) {
    for (let i = 0; i < data.length; i += numberOfRows) {
      const col = data
        .slice(i, i + numberOfRows)
        .map(({id, color, title, isActive}) => (
          <FilterButton
            key={id}
            symbolColor={color}
            title={title}
            isActive={isActive}
            isClickable={isClickable}
            onClick={() => {
              onToggle(id);
            }}
          />
        ));

      filterGrid.push(
        <View key={i} style={styles.groupContainer}>
          {col}
        </View>,
      );
    }
  } else {
    for (let i = 0; i < data.length; i += 1) {
      const {id, color, title, isActive} = data[i];
      const row = (
        <FilterButton
          key={id}
          symbolColor={color}
          title={title}
          isActive={isActive}
          isClickable={isClickable}
          onClick={() => {
            onToggle(id);
          }}
        />
      );

      filterGrid.push(
        <View key={i} style={styles.rowGroupContainer}>
          {row}
        </View>,
      );
    }
  }

  return (
    <View style={isTopView ? styles.container : styles.sideContainer}>
      {filterGrid}
    </View>
  );
}
