import React, { useEffect, useRef } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'

export default function Card2(props) {

  const tiltAngle = useRef(new Animated.Value(0)).current

  const tiltLeft = tiltAngle.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-2deg']
  })

  const tiltRight = tiltAngle.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '2deg']
  })

  const rotation = props.tilt === 'right' ? tiltRight : tiltLeft

  // Animate tilt in on mount
  useEffect(() => {
    Animated.timing(tiltAngle, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <Animated.View style={[styles.cardContainer, { transform: [{ rotate: rotation }] }]}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.dFlex}>
        <Image
          source={props.icon1}
          style={styles.icon}
          resizeMode="contain" // or 'cover', 'stretch', etc.
        />
        <Image
          source={props.icon2}
          style={styles.icon}
          resizeMode="contain" // or 'cover', 'stretch', etc.
        />
        <Image
          source={props.icon3}
          style={styles.icon}
          resizeMode="contain" // or 'cover', 'stretch', etc.
        />
      </View>
      <Text style={styles.diminished}>{props.diminished}</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    margin: 15,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#b1b1b1ff',
    borderRadius: 10,
    backgroundColor: 'white'
  },

  dFlex: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },

  icon: {
    marginRight: 20,
    width: 35,
    height: 35,
  },

  title: {
    fontSize: 21,
  },

  diminished: {
    color: 'gray'
  },
})
