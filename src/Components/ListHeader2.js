import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Section
} from 'react-native';


function ListHeader2(){
    return (
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>
            Websites Monitoring
          </Text>
          <Text style={styles.headerText} >
            Your application to manage your websites !
          </Text>
        </View>
    )};
  
  const styles = StyleSheet.create({
      headerContainer:{
        padding: 10,
        backgroundColor: "#23061E",
        display: "flex",
        justifyContent:"center",
        alignSelf:"center",
      },
      headerTitle:{
        color: "#ffebeb",
        fontSize: 32,
        marginTop:10,
        textAlign:"center", 
      },
      headerText:{
        color: "#ffebeb",
        fontSize: 18,
        marginTop:10,
        textAlign:"center", 
      }
    });

export default ListHeader2;