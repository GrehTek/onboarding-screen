import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import ScreenOne from './screens/Screen1';
import ScreenTwo from './screens/Screen2';

const { width } = Dimensions.get('window');

export default function App() {
  const [screenIndex, setScreenIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const onSwipeLeft = () => {
    if (screenIndex < 1) {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onSwipeRight = () => {
    if (screenIndex > 0) {
      setScreenIndex(screenIndex - 1);
    }
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: screenIndex * -width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [screenIndex]);

  return (
    <LinearGradient
      colors={['#FADCDC', '#E6CDF4', '#FAE7E9']}
      style={styles.container}
    >
      <GestureRecognizer
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        style={styles.container}
      >
        <Animated.View
          style={[
            styles.slider,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >

          <View style={styles.screenWrapper}>
            <ScreenOne />
          </View>
          <View style={styles.screenWrapper}>
            <ScreenTwo />
          </View>
        </Animated.View>
      </GestureRecognizer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  slider: {
    flexDirection: 'row',
    width: width * 2, 
    flex: 1,
  },

  screenWrapper: {
    width: width,
    height: '100%',
  },
});
