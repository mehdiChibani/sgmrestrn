import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {color} from '../constants/colors';
const DrawerMenu = () => {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="red"
        barStyle="light-content"
        translucent
      />
      <View style={styles.appBar} />
      <View style={styles.content} />
      <ImageBackground
        source={require('../../assets/images/sideMenuback.jpeg')}
        resizeMode="cover"
        style={styles.imageBack}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/icons/user.png')}
            style={styles.user}
          />
          <Text style={styles.userName}>Mehdi chibani</Text>
        </View>
      </ImageBackground>
      <View style={{backgroundColor: 'white', paddingTop: 30}}>
        <View style={styles.row}>
          <AntDesign size={25} name={'home'} color={'#ff8533'} />
          <Text style={styles.menuHomeLabel}>Home</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome size={25} name={'user-circle-o'} color={'#8c8c8c'} />
          <Text style={styles.menuLabel}>Profile</Text>
        </View>
        <View style={styles.row}>
          <MaterialIcons size={25} name={'restaurant'} color={'#8c8c8c'} />
          <Text style={styles.menuLabel}>Restaurants</Text>
        </View>
        <View style={styles.row}>
          <AntDesign size={25} name={'setting'} color={'#8c8c8c'} />
          <Text style={styles.menuLabel}>Settings</Text>
        </View>
        <View style={styles.row}>
          <AntDesign size={25} name={'infocirlceo'} color={'#8c8c8c'} />
          <Text style={styles.menuLabel}>Info</Text>
        </View>
      </View>
    </View>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 40 : 56;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginBottom: 22,
  },
  user: {
    height: 65,
    width: 65,
    marginBottom: 5,
  },
  userName: {
    fontFamily: 'Merriweather-regular',
    fontSize: 12,
  },
  imageBack: {
    height: 150,
    alignItems: 'flex-end',
    paddingRight: 25,
    justifyContent: 'center',
  },
  menuHomeLabel: {
    fontFamily: 'Merriweather-bold',
    fontSize: 15,
    color: '#ff8533',
    marginLeft: 10,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: color.coral,
    height: APPBAR_HEIGHT,
  },
  menuLabel: {
    fontFamily: 'Merriweather-bold',
    fontSize: 15,
    color: '#4d4d4d',
    marginLeft: 10,
  },
});
export default DrawerMenu;
