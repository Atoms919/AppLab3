import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, {useRef, useMemo, useState, useEffect} from 'react';
import ListItem from '../components/ListItem';
import { SAMPLE_DATA } from '../../assets/data/SampleData';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const ListHeader = () => (
  <>
    <View style={styles.titlewrapper}>
      <Text style={styles.title}>Markets</Text>
    </View>
    <View style={styles.divider}/>
  </>
)

const HomeScreen = () => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['50%'], []);
  const openModal = (item) => {
    //setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
  }
  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={<ListHeader />}
          keyExtractor={(item) => item.id}
          data={SAMPLE_DATA}
          renderItem={({ item }) => (
            <>
              <ListItem
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                logoUrl={item.image}
                onPress={() => openModal(item)}
              />
              <ListItem
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                logoUrl={item.image}
                onPress={() => openModal(item)}
              />
            </>
          )}
        />
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <View style={styles.container}>
            <Text>Awsome</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  titlewrapper: { 
    marginTop: 30,
    paddingHorizontal: 16
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  divider:{
    height: 1,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop:16
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})