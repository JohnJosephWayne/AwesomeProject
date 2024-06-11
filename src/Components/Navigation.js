import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';
import List from './List';

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ListHeader navigation={navigation}/>
        <List />
        <ListFooter />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    listContentContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    item: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    itemText: {
      fontSize: 18,
    }
  });


export default HomeScreen;