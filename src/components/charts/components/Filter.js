import React from 'react';
import {View} from 'react-native';
import {filterStyle} from '@styles/components/charts';
import FilterButton from './FilterButton';

export default function Filter({data, onToggle, numberOfRows}) {
  const styles = filterStyle();

  const filterGrid = [];
  for (let i = 0; i < data.length; i += numberOfRows) {
    const col = data
      .slice(i, i + numberOfRows)
      .map(({id, color, title, isActive}) => (
        <FilterButton
          key={id}
          symbolColor={color}
          title={title}
          isActive={isActive}
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

  return <View style={styles.container}>{filterGrid}</View>;
}
