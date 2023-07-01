import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import {color} from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BlurView} from '@react-native-community/blur';
const RestaurentGridCard = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: props.restaurent.logoUrl}}
        style={{height: 100, width: 150, marginTop: 5}}
        resizeMode={'contain'}
      />
      <View style={styles.contentView}>
        <BlurView
          style={{flex: 1}}
          blurType="dark"
          blurRadius={1}
          reducedTransparencyFallbackColor="white">
          <Text>{props.restaurent.name}</Text>
        </BlurView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 10,
    shadowColor: 'black',
    alignItems: 'center',

    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  contentView: {
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 10,
    // backgroundColor: 'rgba(192,192,192,0.3)',

    width: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default RestaurentGridCard;
