import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Animated, Pressable} from 'react-native';
import {convertPxToDp} from '@utils';

const circles = [
  {radius: 140, color: '#E6E6E6'},
  {radius: 256, color: '#E6E6E6'},
  {radius: 340, color: '#E6E6E6'},
  {radius: 444, color: '#E6E6E6'},
];

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const createFadeAnimations = (fadeAnims, toValue, duration) => {
  return fadeAnims.map((fadeAnim, idx) =>
    Animated.timing(fadeAnim, {
      toValue,
      duration,
      useNativeDriver: false,
    }),
  );
};

function DetectedMachine(props) {
  const {position, opacity, data} = props;

  return (
    <AnimatedPressable
      style={{
        zIndex: 20,
        position: 'absolute',
        left: position.x,
        top: position.y,
        opacity: opacity,
        width: convertPxToDp(99), // Set the size of your square
        height: convertPxToDp(99), // Set the size of your square
      }}
      onPress={() => {
        console.log('tooooooooot');
      }}>
      <Animated.View style={{...detectedMachine.container}} />
    </AnimatedPressable>
  );
}

const positionList = [
  {x: 0, y: 0},
  // {x: 70, y: 20},
];

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
      {positionList.map((item, idx) => (
        <DetectedMachine key={idx} position={item} opacity={squareOpacity} />
      ))}
    </View>
  );
}

const detectedMachine = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue', // Set the color of your square
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
