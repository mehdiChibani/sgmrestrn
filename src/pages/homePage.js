import React, {useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {fetchData} from '../api/fetchData';
import Swiper from 'react-native-swiper';
import {color} from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RestaurentGridCard from '../components/restaurentGridCard';

const HomePage = () => {
  //............States..........

  const [isLoading, setIsLoading] = React.useState(true);
  const [popularRestaurents, setPopularRestaurents] = React.useState([]);

  //..........Functions.........

  const getPopularResteurents = async () => {
    setIsLoading(true);
    fetchData.getPopularRestaurents().then(response => {
      console.log(response.data);
      setIsLoading(false);
      setPopularRestaurents(response.data);
    });
  };

  useEffect(() => {
    if (popularRestaurents.length === 0) {
      getPopularResteurents();
    }
  });

  return (
    <View style={{backgroundColor: color.concrete, flex: 1}}>
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color="#1F508F" />
        </View>
      ) : (
        <View style={{height: 200}}>
          <Swiper
            horizontal={true}
            autoplay
            activeDotColor={color.blazeOrange}
            dotColor={color.peachOrange}
            paginationStyle={{
              bottom: 5,
            }}>
            {popularRestaurents.length != 0 &&
              popularRestaurents.map((restaurent, index) => {
                return (
                  <Image
                    source={{uri: restaurent.image[0].url}}
                    style={{height: 200}}
                  />
                );
              })}
          </Swiper>
        </View>
      )}
      <View style={styles.titleView}>
        <AntDesign name={'star'} size={25} color={color.blazeOrange} />
        <Text style={styles.listTitle}>Most Popular Restaurents</Text>
      </View>
      {popularRestaurents.length !== 0 && (
        <View style={{marginTop: 20}}>
          <FlatList
            ItemSeparatorComponent={() => <View style={{height: 12}} />}
            data={popularRestaurents}
            renderItem={({item, index}) => (
              // <View
              //   style={{
              //     alignItems: 'flex-start',
              //     backgroundColor: 'white',
              //     borderRadius: 15,
              //     shadowColor: 'black',
              //     shadowOffset: {width: 0, height: 0},
              //     shadowOpacity: 0.5,
              //     shadowRadius: 8,
              //     elevation: 8,
              //     width: 185,
              //     marginLeft: 8,
              //     borderRadius: 20,
              //   }}>
              //   <View style={styles.subCardView}>
              //     <Image
              //       source={{uri: popularRestaurents[index].logoUrl}}
              //       style={{height: 100, width: 150}}
              //       resizeMode={'contain'}
              //     />
              //     <Text style={styles.restaurentName}>
              //       {popularRestaurents[index].name}
              //     </Text>
              //     <View style={{flexDirection: 'row', marginLeft: 7}}>
              //       <AntDesign
              //         name={'star'}
              //         size={15}
              //         color={color.blazeOrange}
              //       />
              //       <AntDesign
              //         name={'star'}
              //         size={15}
              //         color={color.blazeOrange}
              //       />
              //       <AntDesign
              //         name={'star'}
              //         size={15}
              //         color={color.blazeOrange}
              //       />
              //     </View>
              //     <View
              //       style={{
              //         flexDirection: 'row',
              //         alignItems: 'center',
              //         marginTop: 7,
              //         marginLeft: 7,
              //       }}>
              //       <FontAwesome name={'map-pin'} size={15} color={'red'} />
              //       <Text style={styles.location}>
              //         {popularRestaurents[index].location}
              //       </Text>
              //     </View>
              //   </View>
              // </View>
              <RestaurentGridCard restaurent={popularRestaurents[index]} />
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listTitle: {
    fontFamily: 'Merriweather-bold',
    fontSize: 15,
    color: color.mineShaft,
    marginLeft: 15,
  },
  titleView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 10,
  },
  restaurentName: {
    fontFamily: 'Merriweather-bold',
    fontSize: 15,
    color: color.mineShaft,
    marginTop: 7,
    marginLeft: 7,
    marginBottom: 7,
  },
  location: {
    fontFamily: 'Merriweather',
    fontSize: 12,
    color: '#999999',
    width: 170,
    marginLeft: 5,
  },
  subCardView: {
    padding: 12,
    backgroundColor: 'white',
    borderColor: '#8c8c8c',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    width: 185,
    borderRadius: 20,
  },
});

export default HomePage;
