import { LinearGradient } from 'expo-linear-gradient';
import { useRef } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './../components/Card';

// const { height: screenHeight } = Dimensions.get('window');
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fadeStartY = screenHeight * 0.35; // 40% of the screen height

const data = [
  {
    id: '1',
    title: 'Framer',
    price: '$12',
    billedIn: 'Billed in 4 days',
    ctaView: 'View',
    ctaRemind: 'Remind',
    ctaCancel: 'Cancel',
    image: require('./../../assets/images/framer.png')
  },
  {
    id: '2',
    title: 'Figma',
    price: '$12',
    billedIn: 'Billed in 9 days',
    ctaView: 'View',
    ctaRemind: 'Remind',
    ctaCancel: 'Cancel',
    image: require('./../../assets/images/figma.png')
  },
  {
    id: '3',
    title: 'Notion',
    price: '$12',
    billedIn: 'Billed 16 days',
    ctaView: 'View',
    ctaRemind: 'Remind',
    ctaCancel: 'Cancel',
    image: require('./../../assets/images/notion.png')
  },
  {
    id: '4',
    title: 'ChatGPT',
    price: '$12',
    billedIn: 'Billed 24 days',
    ctaView: 'View',
    ctaRemind: 'Remind',
    ctaCancel: 'Cancel',
    image: require('./../../assets/images/chatgpt.png')
  },
  {
    id: '5',
    title: 'Blender',
    price: '$12',
    billedIn: 'Billed 15 days',
    ctaView: 'View',
    ctaRemind: 'Remind',
    ctaCancel: 'Cancel',
    image: require('./../../assets/images/blender.png')
  },

]

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function Index() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const itemHeight = 120;
    const position = index * itemHeight;

    const opacity = scrollY.interpolate({
      inputRange: [
        position - screenHeight + fadeStartY,
        position - screenHeight + screenHeight,
      ],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    const translateY = scrollY.interpolate({
      inputRange: [
        position - screenHeight + fadeStartY,
        position - screenHeight + screenHeight,
      ],
      outputRange: [20, 0],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={[
          styles.card,
          {
            opacity,
            transform: [{ translateY }],
          },
        ]}
      >
        <Card
          titleText={item.title}
          price={item.price}
          billedIn={item.billedIn}
          ctaView={item.ctaView}
          ctaRemind={item.ctaRemind}
          ctaCancel={item.ctaCancel}
          itemId={item.id}
          image={item.image}
        />
      </Animated.View>
    );
  };

  return (
    <>

      <AnimatedFlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 70, paddingBottom: screenHeight * 0.6 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />

      <View style={styles.keepTrackContainer}>
        <Text style={styles.keepTrack}>Keep track of every subscription</Text>
        <Text style={styles.fadedText}>Stay on top of what you pay for</Text>

        {/* <Text style={{ marginTop: 20, marginBottom: 20 }}>o <Text style={{ color: 'black' }}>o</Text> o o</Text> */}
        <View style={styles.iconContainer}>
          <Icon name='circle' size={10} color='gray' />
          <Icon name='circle' size={10} color='black' />
          <Icon name='circle' size={10} color='gray' />
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
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },

  keepTrackContainer: {
    position: 'absolute',
    bottom: 90,
    alignItems: 'center',
    width: '100%',

  },

  keepTrack: {
    fontSize: 40,
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


});



