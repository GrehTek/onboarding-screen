import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function Card(props) {
  const [showcta, setShowcta] = useState(false);

  const handleExpandCard = (item) => {
    item.id === props.particularItem.id && setShowcta(!showcta)

  }

  props.itemId === 1 && console.log("props.itemId", props.itemId)

  return (
    <TouchableWithoutFeedback onPress={() => handleExpandCard(props.particularItem)}>

      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.title}>
            <View style={styles.title}>
              <Image
                source={props.image}
                style={styles.image}
                resizeMode="contain" // or 'cover', 'stretch', etc.
              />
              <Text style={styles.titleText}>{props.titleText}</Text>
            </View>
            <View>
              <Text style={styles.price}>{props.price}</Text>
              <Text style={styles.billedIn}>{props.billedIn}</Text>
            </View>
          </View>
          {
            props.itemId == 1 &&
            <View style={styles.cta}>
              <Text style={[styles.ctaView, styles.btnPill]}>{props.ctaView}</Text>
              <Text style={[styles.ctaRemind, styles.btnPill]}>{props.ctaRemind}</Text>
              <Text style={[styles.ctaCancel, styles.btnPill]}>{props.ctaCancel}</Text>
            </View>
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    // shadowColor: '#7f7f7fff',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    // elevation: 10,

    // // make sure shadow container wraps inner box exactly
    // borderRadius: 15,
  },

  card: {
    padding: 15,
    // margin: 15,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#b1b1b1ff',
    borderRadius: 10,
    width: 330,
  },

  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    textAlign: 'right',
    fontSize: 25,
    fontWeight: 'bold',
  },

  titleText: {
    fontSize: 22,
    fontWeight: 'normal',
  },

  cta: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },

  btnPill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50,
    fontWeight: 'bold',
  },

  ctaView: {
    backgroundColor: '#ffd2eaff',

  },

  ctaRemind: {
    backgroundColor: '#F1E2E7',

  },

  ctaCancel: {
    backgroundColor: '#ffa3a3ff',
    color: 'red',
  },

    image: {
    width: 25,
    height: 25,
    marginRight: 15,
  },

})
