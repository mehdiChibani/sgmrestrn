import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import {color} from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Header = props => {
  return (
    <View style={styles.safeArea}>
      <View style={styles.header}>
        <StatusBar
          animated={true}
          backgroundColor="red"
          barStyle="light-content"
          translucent
        />
        <View style={styles.appBar} />
        <View style={styles.content} />
        <View style={styles.contentView}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
            }}>
            <AntDesign name={'menufold'} size={25} color={color.mineShaft} />
          </TouchableOpacity>
          <Text style={styles.appName}>SgmRest</Text>
          <FontAwesome name={'heart'} size={25} color={color.blazeOrange} />
        </View>
      </View>
    </View>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 40 : 56;
const styles = StyleSheet.create({
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: color.coral,
    height: APPBAR_HEIGHT,
  },
  appName: {
    fontFamily: 'Merriweather-bold',
    fontSize: 20,
  },
  safeArea: {
    backgroundColor: color.concrete,
  },
  header: {
    backgroundColor: 'white',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
});

export default Header;
