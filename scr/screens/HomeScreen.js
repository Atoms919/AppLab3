import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react';
import ListItem from '../components/ListItem';
import { SAMPLE_DATA } from '../../assets/data/SampleData';

const ListHeader = () => (
  <>
    <View style={styles.titlewrapper}>
      <Text style={styles.title}>Markets</Text>
    </View>
    <View style={styles.divider}/>
  </>
)

const HomeScreen = () => {
  return (
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
  }
})