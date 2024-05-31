
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


function ListFooter(){
  return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          TOTO 2024
        </Text>
      </View>
  )};

  const styles = StyleSheet.create({

  footer:{
    width: 300,
    borderTopWidth:1,
    borderStyle:"solid",
    borderColor: "#000",
    display: "flex",
    marginTop:30,
    marginBottom:5,
    justifyContent:"center",
    alignSelf:"center",
    fontSize:8,
  },
  footerText:{
    marginTop:10,
    textAlign:"center", 
  }
});

export default ListFooter;