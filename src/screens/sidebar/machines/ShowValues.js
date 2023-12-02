import convertPxToDp from '@utils/ConvertPxToDp';
import OrderCard from './MachinesCard';
import NewCard from './NewCard';
import {ordersList} from '@styles/orders';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {LinearProgress} from 'react-native-elements';
import {useTheme} from '@theme/ThemeProvider';

const Cards = (data, textNewCard) => {
  return (
    <FlatList
      contentContainerStyle={{paddingLeft: convertPxToDp(82)}}
      data={data}
      renderItem={({item, index}) =>
        index != 0 ? (
          <OrderCard
            info={item}
            style={{paddingRight: convertPxToDp(30)}}
            key={3}
          />
        ) : (
          <NewCard
            containerStyle={{marginRight: convertPxToDp(30)}}
            text={textNewCard}
          />
        )
      }
      numColumns={3}
      ItemSeparatorComponent={() => (
        <View style={{height: convertPxToDp(30)}} />
      )}
    />
  );
};

function getFromObjectToJSX_Text(type, object, style) {
  const {theme} = useTheme();
  let styles = ordersList(theme);
  let list = [];

  switch (type.toLowerCase()) {
    case 'keys':
      list = Object.keys(object);
      break;
    case 'values':
      list = Object.values(object);
      break;
  }

  let jsxText = [];
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element == null) {
      if (Object.keys(object)[index].toLocaleLowerCase() == 'actions') {
        jsxText.push(
          <View style={styles.rowView} key={index}>
            <View
              style={{
                flexDirection: 'row',
                gap: convertPxToDp(17),
              }}>
              <View style={styles.actionIcon}></View>
              <View style={styles.actionIcon}></View>
            </View>
          </View>,
        );
      }
    } else {
      //console.log(index);
      if (type != 'keys') {
        switch (Object.keys(object)[index].toLocaleLowerCase()) {
          case 'progress':
            jsxText.push(
              <View style={styles.rowView} key={index}>
                <View>
                  <Text
                    style={[
                      styles.rowText,
                      {
                        flex: 0,
                        fontSize: convertPxToDp(12),
                        textAlign: 'right',
                        lineHeight: convertPxToDp(14.52),
                      },
                    ]}>
                    {element + '%'}
                  </Text>
                  <LinearProgress
                    color="rgba(60, 68, 70, 1)" // temp
                    trackColor="#E9E9E9" // temp
                    value={element / 100}
                    variant="determinate"
                    style={{
                      alignSelf: 'center',
                      borderRadius: convertPxToDp(100),
                      width: convertPxToDp(87),
                    }}
                  />
                </View>
              </View>,
            );
            break;
          case 'status':
            styles = ordersList(theme, element);
            jsxText.push(
              <View style={styles.rowView} key={index}>
                <View style={styles.statusContainer}>
                  <View style={styles.statusIcon}>{/* Icon Image */}</View>
                  <View style={styles.status}>
                    <Text style={styles.statusText}>{element}</Text>
                  </View>
                </View>
              </View>,
            );
            styles = ordersList(theme);
            break;

          default:
            jsxText.push(
              <Text style={styles.rowText} key={index}>
                {element}
              </Text>,
            );
            break;
        }
      } else {
        jsxText.push(
          <Text style={styles.headerText} key={index}>
            {formatKey(element)}
          </Text>,
        );
      }
    }
  }
  //console.log(`--------------------------------------------`);

  return jsxText;
}

function formatKey(inputString) {
  var words = inputString.split('_');

  // Capitalize the first letter of each word
  var formattedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words with a space
  var formattedString = formattedWords.join(' ');

  return formattedString;
}

const Lists = (data, textNewCard) => {
  const {theme} = useTheme();
  let styles = ordersList(theme);
  let rows = [];
  let orderData = {};
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    orderData = {
      order_number: element.order_number,
      start: element.start_date,
      end: element.end_date,
      speed_rate: element.finished_rolls + ' Km/' + element.total_rolls,
      working_hours: element.working_hour,
      stop_hours: element.stop_hour,
      mechine_number: element.number_of_machines,
      progress: element.progress_percent,
      status: element.status,
      actions: null,
    };
    rows.push(
      <View style={styles.rowContainer} key={index}>
        {getFromObjectToJSX_Text('values', orderData)}
      </View>,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.addOrderContainer}>
        <NewCard
          containerStyle={{
            width: convertPxToDp(234),
            height: convertPxToDp(68),
            paddingVertical: convertPxToDp(20),
            paddingHorizontal: convertPxToDp(40),
            borderRadius: convertPxToDp(16),
          }}
          text={textNewCard}
        />
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.headerContainer}>
          {getFromObjectToJSX_Text('keys', orderData)}
        </View>
        <View style={styles.detailsContainer}>{rows}</View>
      </View>
    </View>
  );
};

export default ShowValues = ({
  showType,
  data,
  textNew,
  contentContainerStyle,
}) => {
  return (
    <View style={[contentContainerStyle]}>
      {showType == 'Card' ? Cards(data, textNew) : Lists(data, textNew)}
    </View>
  );
};
