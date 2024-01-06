import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Pressable,
  TouchableOpacity,
  Text,
} from 'react-native';
import {convertPxToDp} from '@utils';
import Icon from './Icon';

const circles = [
  {radius: 140, color: '#E6E6E6'},
  {radius: 256, color: '#E6E6E6'},
  {radius: 340, color: '#E6E6E6'},
  {radius: 444, color: '#E6E6E6'},
];

const AnimatedView = Animated.createAnimatedComponent(View);

const createFadeAnimations = (fadeAnims, toValue, duration) => {
  return fadeAnims.map((fadeAnim, idx) =>
    Animated.timing(fadeAnim, {
      toValue,
      duration,
      useNativeDriver: false,
    }),
  );
};

const shuffleArray = array => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const positionList = [
  {x: 40, y: 0},
  {x: 150, y: 0},
  {x: 250, y: 80},
  {x: 7, y: 200},
  {x: 230, y: 200},
  {x: 120, y: 250},
  {x: -20, y: 90},
];

const getRandomUniquePosition = positions => {
  const shuffledPositions = shuffleArray(positions);
  return shuffledPositions.pop();
};

export default function RadarAnimation() {
  const fadeAnims = useRef(circles.map(() => new Animated.Value(0))).current;
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (animationStarted) {
      const fadeInAnimations = createFadeAnimations(fadeAnims, 0.7, 0);
      const fadeOutAnimations = createFadeAnimations(
        fadeAnims.reverse(),
        0,
        800,
      );

      const squareFadeIn = Animated.timing(squareOpacity, {
        toValue: 1,
        duration: 1,
        useNativeDriver: false,
      });

      const squareFadeOut = Animated.timing(squareOpacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      });

      const sequence = Animated.sequence([
        Animated.stagger(300, fadeInAnimations),
        squareFadeIn,
        // Animated.parallel([...fadeOutAnimations, squareFadeOut]),
      ]);

      const loopedAnimations = Animated.loop(sequence);

      loopedAnimations.start();

      return () => loopedAnimations.stop(); // Stop the animation when the component unmounts
    }
  }, [fadeAnims, animationStarted]);

  const handlePress = () => {
    setAnimationStarted(!animationStarted);
  };

  const squareOpacity = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={styles.container}
      onLayout={event => {
        console.log('big parent', event.nativeEvent.layout);
        // setParentLayout(event.nativeEvent.layout);
      }}>
      {circles.map((item, idx) => {
        return (
          <AnimatedView
            key={idx}
            style={{
              ...circleStyles[idx],
              opacity: fadeAnims[idx].interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            }}
          />
        );
      })}

      <Pressable style={styles.button} onPress={handlePress}></Pressable>
      <View
        style={{
          width: convertPxToDp(444),
          height: convertPxToDp(444),
        }}>
        {Array(positionList.length)
          .fill(0)
          .map((_, idx) => {
            const position = getRandomUniquePosition(positionList);
            return (
              <AnimatedView
                key={idx}
                style={{
                  ...styles.square,
                  opacity: squareOpacity,
                  transform: [
                    {translateX: position.x},
                    {translateY: position.y},
                  ],
                  zIndex: 20,
                }}>
                <TouchableOpacity
                  style={detectedMachine.container}
                  onPress={() => {
                    console.log('tata');
                  }}>
                  <View style={detectedMachine.innerContainer}>
                    <Icon iconName={'machine-outline'} />
                    <Text>{idx}</Text>
                  </View>
                </TouchableOpacity>
              </AnimatedView>
            );
          })}
      </View>
    </View>
  );
}

const detectedMachine = StyleSheet.create({
  container: {
    flex: 1,
    padding: convertPxToDp(7),
    borderRadius: convertPxToDp(99),
    backgroundColor: 'white', // Set the color of your square
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: convertPxToDp(99),
    backgroundColor: '#E6E6E6',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  button: {
    position: 'absolute',
    width: convertPxToDp(118),
    height: convertPxToDp(118),
    borderRadius: convertPxToDp(118),
    backgroundColor: 'gray',
    zIndex: 10,
  },

  square: {
    position: 'absolute',
    width: convertPxToDp(99), // Set the size of your square
    height: convertPxToDp(99), // Set the size of your square
  },
});

const circleStyles = circles.map((item, idx) => {
  return {
    position: 'absolute',
    width: convertPxToDp(item.radius),
    height: convertPxToDp(item.radius),
    borderRadius: convertPxToDp(item.radius),
    backgroundColor: item.color,
    zIndex: -idx + 1,
  };
});
