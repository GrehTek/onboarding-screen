import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../components/Card2';


const data = [
  {
    id: 1,
    title: 'Designers Toolkit',
    icon1: require('./../../assets/images/figma.png'),
    icon2: require('./../../assets/images/framer.png'),
    icon3: require('./../../assets/images/canva.png'),
    diminished: '1,200 creatives trust this stack'
  },
  {
    id: 2,
    title: 'Indie Hacker\'s Essentials',
    icon1: require('./../../assets/images/vercel.png'),
    icon2: require('./../../assets/images/notion.png'),
    icon3: require('./../../assets/images/stripe.png'),
    diminished: 'Curated by Sam Ortega building profitable products solo'
  },
  {
    id: 3,
    title: 'Remote Team Starter Pack',
    icon1: require('./../../assets/images/slack.png'),
    icon2: require('./../../assets/images/miro.png'),
    icon3: require('./../../assets/images/loom.jpg'),
    diminished: 'Curated by Kendra Holt helping distributed teams thrive'
  },
]

const screenWidth = Dimensions.get('window').width;

export default function Screen2() {

  return (
    <>
      <View style={styles.container}>
        {
          data.map(item => (
            <Card
              key={item.id}
              title={item.title}
              icon1={item.icon1}
              icon2={item.icon2}
              icon3={item.icon3}
              diminished={item.diminished}
              tilt={item.id % 2 === 0 ? 'right' : 'left'}
            />
          ))
        }
      </View>

      <View style={styles.keepTrackContainer}>
        <Text style={styles.keepTrack}>Work like the {'\n'} best</Text>
        <Text style={styles.fadedText}>Discover proven tools from the people who master their craft</Text>

        <View style={styles.iconContainer}>
          <Icon name='circle' size={10} color='gray' />
          <Icon name='circle' size={10} color='gray' />
          <Icon name='circle' size={10} color='black' />
          <Icon name='circle' size={10} color='gray' />
        </View>

        <TouchableOpacity>
          <LinearGradient
            colors={['#a1a1a1ff', '#343639ff', '#000000ff']}
            style={styles.getStartedBtn}
          >
            <Text style={styles.getStartedBtn}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },


  keepTrackContainer: {
    position: 'absolute',
    bottom: 90,
    alignItems: 'center',
    width: '100%',

  },

  keepTrack: {
    fontSize: 45,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: '10%'
  },

  fadedText: {
    color: 'gray',
  },

  getStartedBtn: {
    width: screenWidth - 100,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },

  iconContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: 70,
    backgroundColor: 'silver',
    padding: 6,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})
