import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import OrderCard from './OrderCard';
import {FlashList} from '@shopify/flash-list';
import {useEffect, useState} from 'react';
import {convertToPxLayout} from '@styles/globalStyles';
import NewCard from './NewCard';
import {orderScreen} from '@styles/orders';
import {useTheme} from '@theme/ThemeProvider';
import {LinearProgress} from 'react-native-elements';

const example = [
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Finished',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'In Progress',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Pending',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Finished',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Pending',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'In Progress',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Pending',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'In Progress',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Pending',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
];

function TabsContainer({tabs, selectedTab, containerStyle, onTabPress}) {
  const {theme, toggleTheme, themeStyles} = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#DDE3E5',
      justifyContent: 'space-between',
      paddingRight: convertToPxLayout(10),
      paddingLeft: convertToPxLayout(20),
      paddingVertical: convertToPxLayout(14),
      borderRadius: convertToPxLayout(16),
    },

    tab: {
      paddingHorizontal: convertToPxLayout(20),
      paddingVertical: convertToPxLayout(14),
      borderRadius: convertToPxLayout(16),
      marginRight: convertToPxLayout(10),
    },
    tabText: {
      fontFamily: 'Inter',
      fontSize: convertToPxLayout(22),
      fontWeight: '600',
      lineHeight: convertToPxLayout(27),
      textAlign: 'left',
      color: 'rgba(60, 68, 70, 0.75)',
    },
  });

  let elements = [];

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    // 2 means selected
    // 1 means not
    const isSelected = selectedTab == tab ? 2 : 1;

    elements.push(
      <TouchableOpacity
        key={i}
        onPress={() => onTabPress(tab)}
        style={[styles.tab, {backgroundColor: '#FFFFFF'}].slice(0, isSelected)}>
        <Text
          style={[styles.tabText, {color: 'rgba(60, 68, 70, 1)'}].slice(
            0,
            isSelected,
          )}>
          {tab}
        </Text>
      </TouchableOpacity>,
    );
  }

  return <View style={[styles.container, containerStyle]}>{elements}</View>;
}

export default function OrdersScreen() {
  const {theme} = useTheme();
  const [filter, setFilter] = useState(
    'All' || 'Finished' || 'Pending' || 'In Progress',
  );
  const [showType, setShowType] = useState('Card' || 'Table');
  const styles = orderScreen(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TabsContainer
          containerStyle={{left: convertToPxLayout(260), position: 'absolute'}}
          tabs={['Table', 'Card']}
          selectedTab={showType}
          onTabPress={tabClicked => setShowType(tabClicked)}
        />
        <TabsContainer
          tabs={['All', 'Finished', 'Pending', 'In Progress']}
          selectedTab={filter}
          onTabPress={tabClicked => setFilter(tabClicked)}
        />
      </View>
      {showType == 'Card' ? (
        <FlatList
          contentContainerStyle={styles.list}
          data={example}
          renderItem={({item, index}) =>
            index != 0 ? (
              <OrderCard
                info={item}
                style={{paddingRight: convertToPxLayout(30)}}
                key={3}
              />
            ) : (
              <NewCard
                containerStyle={{marginRight: convertToPxLayout(30)}}
                text={'Add Order'}
              />
            )
          }
          numColumns={3}
          ItemSeparatorComponent={() => (
            <View style={{height: convertToPxLayout(30)}} />
          )}
        />
      ) : (
        <View style={tempStyle.container}>
          <View style={tempStyle.addOrderContainer}>
            <NewCard
              containerStyle={{
                width: convertToPxLayout(234),
                height: convertToPxLayout(68),
                paddingVertical: convertToPxLayout(20),
                paddingHorizontal: convertToPxLayout(40),
                borderRadius: convertToPxLayout(16),
              }}
              text={'Add Order'}
            />
          </View>
          <View style={tempStyle.tableContainer}>
            <View style={tempStyle.headerContainer}>
              <Text style={tempStyle.headerText}>Order Number</Text>
              <Text style={tempStyle.headerText}>Start</Text>
              <Text style={tempStyle.headerText}>End</Text>
              <Text style={tempStyle.headerText}>Speed Rate</Text>
              <Text style={tempStyle.headerText}>Working Hours</Text>
              <Text style={tempStyle.headerText}>Stop Hours</Text>
              <Text style={tempStyle.headerText}>Mechine Number</Text>
              <Text style={tempStyle.headerText}>Progress</Text>
              <Text style={tempStyle.headerText}>Status</Text>
              <Text style={tempStyle.headerText}>Actions</Text>
            </View>
            <View style={tempStyle.detailsContainer}>
              <View style={tempStyle.rowContainer}>
                <Text style={tempStyle.rowText}>1234567</Text>
                <Text style={tempStyle.rowText}>26 / 9 / 2023</Text>
                <Text style={tempStyle.rowText}>26 / 10 / 2023</Text>
                <Text style={tempStyle.rowText}>15 Km/50</Text>
                <Text style={tempStyle.rowText}>21 hours</Text>
                <Text style={tempStyle.rowText}>36 hours</Text>
                <Text style={tempStyle.rowText}>12</Text>
                <View style={tempStyle.rowView}>
                  <View>
                    <Text
                      style={[
                        tempStyle.rowText,
                        {
                          flex: 0,
                          fontSize: convertToPxLayout(12),
                          textAlign: 'right',
                        },
                      ]}>
                      45%
                    </Text>
                    <LinearProgress
                      color="rgba(60, 68, 70, 1)" // temp
                      trackColor="#E9E9E9" // temp
                      value={45 / 100}
                      variant="determinate"
                      style={{
                        alignSelf: 'center',
                        borderRadius: convertToPxLayout(100),
                        width: convertToPxLayout(87),
                      }}
                    />
                  </View>
                </View>
                <View style={[tempStyle.rowView]}>
                  <View style={tempStyle.statusContainer}>
                    <View style={tempStyle.statusIcon}>{/* Icon Image */}</View>
                    <View style={tempStyle.status}>
                      <Text style={tempStyle.statusText}>{'Pending'}</Text>
                    </View>
                  </View>
                </View>
                <View style={tempStyle.rowView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: convertToPxLayout(17),
                    }}>
                    <View style={tempStyle.actionIcon}></View>
                    <View style={tempStyle.actionIcon}></View>
                  </View>
                </View>
              </View>
              <View style={tempStyle.rowContainer}>
                <Text style={tempStyle.rowText}>1234567</Text>
                <Text style={tempStyle.rowText}>26 / 9 / 2023</Text>
                <Text style={tempStyle.rowText}>26 / 10 / 2023</Text>
                <Text style={tempStyle.rowText}>15 Km/50</Text>
                <Text style={tempStyle.rowText}>21 hours</Text>
                <Text style={tempStyle.rowText}>36 hours</Text>
                <Text style={tempStyle.rowText}>12</Text>
                <View style={tempStyle.rowView}>
                  <View>
                    <Text
                      style={[
                        tempStyle.rowText,
                        {
                          flex: 0,
                          fontSize: convertToPxLayout(12),
                          textAlign: 'right',
                        },
                      ]}>
                      45%
                    </Text>
                    <LinearProgress
                      color="rgba(60, 68, 70, 1)" // temp
                      trackColor="#E9E9E9" // temp
                      value={45 / 100}
                      variant="determinate"
                      style={{
                        alignSelf: 'center',
                        borderRadius: convertToPxLayout(100),
                        width: convertToPxLayout(87),
                      }}
                    />
                  </View>
                </View>
                <View style={[tempStyle.rowView]}>
                  <View style={tempStyle.statusContainer}>
                    <View style={tempStyle.statusIcon}>{/* Icon Image */}</View>
                    <View style={tempStyle.status}>
                      <Text style={tempStyle.statusText}>{'Pending'}</Text>
                    </View>
                  </View>
                </View>
                <View style={tempStyle.rowView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: convertToPxLayout(17),
                    }}>
                    <View style={tempStyle.actionIcon}></View>
                    <View style={tempStyle.actionIcon}></View>
                  </View>
                </View>
              </View>
              <View
                style={[
                  tempStyle.rowContainer,
                  {backgroundColor: 'rgba(247, 246, 254, 1)'},
                ]}>
                <Text style={tempStyle.rowText}>1234567</Text>
                <Text style={tempStyle.rowText}>26 / 9 / 2023</Text>
                <Text style={tempStyle.rowText}>26 / 10 / 2023</Text>
                <Text style={tempStyle.rowText}>15 Km/50</Text>
                <Text style={tempStyle.rowText}>21 hours</Text>
                <Text style={tempStyle.rowText}>36 hours</Text>
                <Text style={tempStyle.rowText}>12</Text>
                <View style={tempStyle.rowView}>
                  <View>
                    <Text
                      style={[
                        tempStyle.rowText,
                        {
                          flex: 0,
                          fontSize: convertToPxLayout(12),
                          textAlign: 'right',
                        },
                      ]}>
                      45%
                    </Text>
                    <LinearProgress
                      color="rgba(60, 68, 70, 1)" // temp
                      trackColor="#E9E9E9" // temp
                      value={45 / 100}
                      variant="determinate"
                      style={{
                        alignSelf: 'center',
                        borderRadius: convertToPxLayout(100),
                        width: convertToPxLayout(87),
                      }}
                    />
                  </View>
                </View>
                <View style={[tempStyle.rowView]}>
                  <View style={tempStyle.statusContainer}>
                    <View style={tempStyle.statusIcon}>{/* Icon Image */}</View>
                    <View style={tempStyle.status}>
                      <Text style={tempStyle.statusText}>{'Pending'}</Text>
                    </View>
                  </View>
                </View>
                <View style={tempStyle.rowView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: convertToPxLayout(17),
                    }}>
                    <View style={tempStyle.actionIcon}></View>
                    <View style={tempStyle.actionIcon}></View>
                  </View>
                </View>
              </View>
              <View style={tempStyle.rowContainer}>
                <Text style={tempStyle.rowText}>1234567</Text>
                <Text style={tempStyle.rowText}>26 / 9 / 2023</Text>
                <Text style={tempStyle.rowText}>26 / 10 / 2023</Text>
                <Text style={tempStyle.rowText}>15 Km/50</Text>
                <Text style={tempStyle.rowText}>21 hours</Text>
                <Text style={tempStyle.rowText}>36 hours</Text>
                <Text style={tempStyle.rowText}>12</Text>
                <View style={tempStyle.rowView}>
                  <View>
                    <Text
                      style={[
                        tempStyle.rowText,
                        {
                          flex: 0,
                          fontSize: convertToPxLayout(12),
                          textAlign: 'right',
                        },
                      ]}>
                      45%
                    </Text>
                    <LinearProgress
                      color="rgba(60, 68, 70, 1)" // temp
                      trackColor="#E9E9E9" // temp
                      value={45 / 100}
                      variant="determinate"
                      style={{
                        alignSelf: 'center',
                        borderRadius: convertToPxLayout(100),
                        width: convertToPxLayout(87),
                      }}
                    />
                  </View>
                </View>
                <View style={[tempStyle.rowView]}>
                  <View style={tempStyle.statusContainer}>
                    <View style={tempStyle.statusIcon}>{/* Icon Image */}</View>
                    <View style={tempStyle.status}>
                      <Text style={tempStyle.statusText}>{'Pending'}</Text>
                    </View>
                  </View>
                </View>
                <View style={tempStyle.rowView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: convertToPxLayout(17),
                    }}>
                    <View style={tempStyle.actionIcon}></View>
                    <View style={tempStyle.actionIcon}></View>
                  </View>
                </View>
              </View>
              <View style={tempStyle.rowContainer}>
                <Text style={tempStyle.rowText}>1234567</Text>
                <Text style={tempStyle.rowText}>26 / 9 / 2023</Text>
                <Text style={tempStyle.rowText}>26 / 10 / 2023</Text>
                <Text style={tempStyle.rowText}>15 Km/50</Text>
                <Text style={tempStyle.rowText}>21 hours</Text>
                <Text style={tempStyle.rowText}>36 hours</Text>
                <Text style={tempStyle.rowText}>12</Text>
                <View style={tempStyle.rowView}>
                  <View>
                    <Text
                      style={[
                        tempStyle.rowText,
                        {
                          flex: 0,
                          fontSize: convertToPxLayout(12),
                          textAlign: 'right',
                        },
                      ]}>
                      45%
                    </Text>
                    <LinearProgress
                      color="rgba(60, 68, 70, 1)" // temp
                      trackColor="#E9E9E9" // temp
                      value={45 / 100}
                      variant="determinate"
                      style={{
                        alignSelf: 'center',
                        borderRadius: convertToPxLayout(100),
                        width: convertToPxLayout(87),
                      }}
                    />
                  </View>
                </View>
                <View style={[tempStyle.rowView]}>
                  <View style={tempStyle.statusContainer}>
                    <View style={tempStyle.statusIcon}>{/* Icon Image */}</View>
                    <View style={tempStyle.status}>
                      <Text style={tempStyle.statusText}>{'Pending'}</Text>
                    </View>
                  </View>
                </View>
                <View style={tempStyle.rowView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: convertToPxLayout(17),
                    }}>
                    <View style={tempStyle.actionIcon}></View>
                    <View style={tempStyle.actionIcon}></View>
                  </View>
                </View>
              </View>
              <View
                style={[
                  tempStyle.rowContainer,
                  {backgroundColor: 'rgba(247, 246, 254, 1)'},
                ]}>
                <Text style={tempStyle.rowText}>1234567</Text>
                <Text style={tempStyle.rowText}>26 / 9 / 2023</Text>
                <Text style={tempStyle.rowText}>26 / 10 / 2023</Text>
                <Text style={tempStyle.rowText}>15 Km/50</Text>
                <Text style={tempStyle.rowText}>21 hours</Text>
                <Text style={tempStyle.rowText}>36 hours</Text>
                <Text style={tempStyle.rowText}>12</Text>
                <View style={tempStyle.rowView}>
                  <View>
                    <Text
                      style={[
                        tempStyle.rowText,
                        {
                          flex: 0,
                          fontSize: convertToPxLayout(12),
                          textAlign: 'right',
                        },
                      ]}>
                      45%
                    </Text>
                    <LinearProgress
                      color="rgba(60, 68, 70, 1)" // temp
                      trackColor="#E9E9E9" // temp
                      value={45 / 100}
                      variant="determinate"
                      style={{
                        alignSelf: 'center',
                        borderRadius: convertToPxLayout(100),
                        width: convertToPxLayout(87),
                      }}
                    />
                  </View>
                </View>
                <View style={[tempStyle.rowView]}>
                  <View style={tempStyle.statusContainer}>
                    <View style={tempStyle.statusIcon}>{/* Icon Image */}</View>
                    <View style={tempStyle.status}>
                      <Text style={tempStyle.statusText}>{'Pending'}</Text>
                    </View>
                  </View>
                </View>
                <View style={tempStyle.rowView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: convertToPxLayout(17),
                    }}>
                    <View style={tempStyle.actionIcon}></View>
                    <View style={tempStyle.actionIcon}></View>
                  </View>
                </View>
              </View>
              <View style={tempStyle.rowContainer}>
                <Text style={tempStyle.rowText}>1234567</Text>
                <Text style={tempStyle.rowText}>26 / 9 / 2023</Text>
                <Text style={tempStyle.rowText}>26 / 10 / 2023</Text>
                <Text style={tempStyle.rowText}>15 Km/50</Text>
                <Text style={tempStyle.rowText}>21 hours</Text>
                <Text style={tempStyle.rowText}>36 hours</Text>
                <Text style={tempStyle.rowText}>12</Text>
                <View style={tempStyle.rowView}>
                  <View>
                    <Text
                      style={[
                        tempStyle.rowText,
                        {
                          flex: 0,
                          fontSize: convertToPxLayout(12),
                          textAlign: 'right',
                        },
                      ]}>
                      45%
                    </Text>
                    <LinearProgress
                      color="rgba(60, 68, 70, 1)" // temp
                      trackColor="#E9E9E9" // temp
                      value={45 / 100}
                      variant="determinate"
                      style={{
                        alignSelf: 'center',
                        borderRadius: convertToPxLayout(100),
                        width: convertToPxLayout(87),
                      }}
                    />
                  </View>
                </View>
                <View style={[tempStyle.rowView]}>
                  <View style={tempStyle.statusContainer}>
                    <View style={tempStyle.statusIcon}>{/* Icon Image */}</View>
                    <View style={tempStyle.status}>
                      <Text style={tempStyle.statusText}>{'Pending'}</Text>
                    </View>
                  </View>
                </View>
                <View style={tempStyle.rowView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: convertToPxLayout(17),
                    }}>
                    <View style={tempStyle.actionIcon}></View>
                    <View style={tempStyle.actionIcon}></View>
                  </View>
                </View>
              </View>
              <View style={tempStyle.rowContainer}>
                <Text style={tempStyle.rowText}>1234567</Text>
                <Text style={tempStyle.rowText}>26 / 9 / 2023</Text>
                <Text style={tempStyle.rowText}>26 / 10 / 2023</Text>
                <Text style={tempStyle.rowText}>15 Km/50</Text>
                <Text style={tempStyle.rowText}>21 hours</Text>
                <Text style={tempStyle.rowText}>36 hours</Text>
                <Text style={tempStyle.rowText}>12</Text>
                <View style={tempStyle.rowView}>
                  <View>
                    <Text
                      style={[
                        tempStyle.rowText,
                        {
                          flex: 0,
                          fontSize: convertToPxLayout(12),
                          textAlign: 'right',
                        },
                      ]}>
                      45%
                    </Text>
                    <LinearProgress
                      color="rgba(60, 68, 70, 1)" // temp
                      trackColor="#E9E9E9" // temp
                      value={45 / 100}
                      variant="determinate"
                      style={{
                        alignSelf: 'center',
                        borderRadius: convertToPxLayout(100),
                        width: convertToPxLayout(87),
                      }}
                    />
                  </View>
                </View>
                <View style={[tempStyle.rowView]}>
                  <View style={tempStyle.statusContainer}>
                    <View style={tempStyle.statusIcon}>{/* Icon Image */}</View>
                    <View style={tempStyle.status}>
                      <Text style={tempStyle.statusText}>{'Pending'}</Text>
                    </View>
                  </View>
                </View>
                <View style={tempStyle.rowView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: convertToPxLayout(17),
                    }}>
                    <View style={tempStyle.actionIcon}></View>
                    <View style={tempStyle.actionIcon}></View>
                  </View>
                </View>
              </View>
              <View
                style={[
                  tempStyle.rowContainer,
                  {backgroundColor: 'rgba(247, 246, 254, 1)'},
                ]}>
                <Text style={tempStyle.rowText}>1234567</Text>
                <Text style={tempStyle.rowText}>26 / 9 / 2023</Text>
                <Text style={tempStyle.rowText}>26 / 10 / 2023</Text>
                <Text style={tempStyle.rowText}>15 Km/50</Text>
                <Text style={tempStyle.rowText}>21 hours</Text>
                <Text style={tempStyle.rowText}>36 hours</Text>
                <Text style={tempStyle.rowText}>12</Text>
                <View style={tempStyle.rowView}>
                  <View>
                    <Text
                      style={[
                        tempStyle.rowText,
                        {
                          flex: 0,
                          fontSize: convertToPxLayout(12),
                          textAlign: 'right',
                        },
                      ]}>
                      45%
                    </Text>
                    <LinearProgress
                      color="rgba(60, 68, 70, 1)" // temp
                      trackColor="#E9E9E9" // temp
                      value={45 / 100}
                      variant="determinate"
                      style={{
                        alignSelf: 'center',
                        borderRadius: convertToPxLayout(100),
                        width: convertToPxLayout(87),
                      }}
                    />
                  </View>
                </View>
                <View style={[tempStyle.rowView]}>
                  <View style={tempStyle.statusContainer}>
                    <View style={tempStyle.statusIcon}>{/* Icon Image */}</View>
                    <View style={tempStyle.status}>
                      <Text style={tempStyle.statusText}>{'Pending'}</Text>
                    </View>
                  </View>
                </View>
                <View style={tempStyle.rowView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: convertToPxLayout(17),
                    }}>
                    <View style={tempStyle.actionIcon}></View>
                    <View style={tempStyle.actionIcon}></View>
                  </View>
                </View>
              </View>
              <View style={tempStyle.rowContainer}>
                <Text style={tempStyle.rowText}>1234567</Text>
                <Text style={tempStyle.rowText}>26 / 9 / 2023</Text>
                <Text style={tempStyle.rowText}>26 / 10 / 2023</Text>
                <Text style={tempStyle.rowText}>15 Km/50</Text>
                <Text style={tempStyle.rowText}>21 hours</Text>
                <Text style={tempStyle.rowText}>36 hours</Text>
                <Text style={tempStyle.rowText}>12</Text>
                <View style={tempStyle.rowView}>
                  <View>
                    <Text
                      style={[
                        tempStyle.rowText,
                        {
                          flex: 0,
                          fontSize: convertToPxLayout(12),
                          textAlign: 'right',
                        },
                      ]}>
                      45%
                    </Text>
                    <LinearProgress
                      color="rgba(60, 68, 70, 1)" // temp
                      trackColor="#E9E9E9" // temp
                      value={45 / 100}
                      variant="determinate"
                      style={{
                        alignSelf: 'center',
                        borderRadius: convertToPxLayout(100),
                        width: convertToPxLayout(87),
                      }}
                    />
                  </View>
                </View>
                <View style={[tempStyle.rowView]}>
                  <View style={tempStyle.statusContainer}>
                    <View style={tempStyle.statusIcon}>{/* Icon Image */}</View>
                    <View style={tempStyle.status}>
                      <Text style={tempStyle.statusText}>{'Pending'}</Text>
                    </View>
                  </View>
                </View>
                <View style={tempStyle.rowView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: convertToPxLayout(17),
                    }}>
                    <View style={tempStyle.actionIcon}></View>
                    <View style={tempStyle.actionIcon}></View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
const bgColor = 'rgba(242, 155, 38, 0.2)';
const contentColor = 'rgba(242, 155, 38, 1)';
const tempStyle = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    marginTop: convertToPxLayout(34),
    marginHorizontal: convertToPxLayout(82),
  },
  addOrderContainer: {
    // backgroundColor: 'green',
    width: '100%',
  },
  tableContainer: {
    backgroundColor: 'yellow',
    width: '100%',
    height: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: convertToPxLayout(16),
    marginBottom: convertToPxLayout(78),
    marginTop: convertToPxLayout(40),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    paddingVertical: convertToPxLayout(22),
  },
  headerText: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: convertToPxLayout(16),
    fontWeight: '700',
    lineHeight: convertToPxLayout(19),
    textAlign: 'center',
  },

  detailsContainer: {
    alignItems: 'center',
  },
  rowContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingTop: convertToPxLayout(15),
    paddingBottom: convertToPxLayout(12),
  },
  rowText: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: convertToPxLayout(14),
    fontWeight: '500',
    lineHeight: convertToPxLayout(20),
    textAlign: 'center',
  },
  rowView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusContainer: {
    height: convertToPxLayout(43),
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: bgColor, // green
    alignItems: 'center',
    paddingLeft: convertToPxLayout(12),
    paddingRight: convertToPxLayout(33),
    paddingVertical: convertToPxLayout(10),
    borderRadius: convertToPxLayout(15),
  },
  status: {
    marginLeft: convertToPxLayout(12),
  },
  statusText: {
    fontFamily: 'Inter',
    fontSize: convertToPxLayout(16),
    fontWeight: '700',
    lineHeight: convertToPxLayout(19.36),
    textAlign: 'left',
    color: contentColor,
    // temp
  },
  statusIcon: {
    width: convertToPxLayout(15),
    height: convertToPxLayout(15),
    borderRadius: convertToPxLayout(999),
    backgroundColor: contentColor,
    // temp
  },

  actionIcon: {
    width: convertToPxLayout(28),
    height: convertToPxLayout(28),
    backgroundColor: 'orange',
  },
});
