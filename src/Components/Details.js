import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';

const Details = ({ route, navigation}) => {

    const {item} = route.params;
    return(
    <View style={styles.container}>
        <ListHeader />
        <Text style={styles.title}>{item}</Text>
        <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Liste')} style={styles.accueilButton}>
            <Text style={styles.accueilButtonText}>Retour</Text>
        </TouchableOpacity>
        <ListFooter />
    </View>
    );
}


const styles = StyleSheet.create({
    text: {
    fontSize: 15,
    marginTop: 20,
    color:'#340834',
    textAlign: 'center',
    borderBottomColor:'#340834',
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#340834',
    textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor:"#E6D0E6",
    },
    accueilButton: {
        backgroundColor: '#cdef97',
        padding: 7,
        borderRadius: 5,
        margin: 25,
    },
    accueilButtonText: {
        color: '#340834',
        fontSize: 15,
        fontWeight:'semi-bold',
        textAlign: 'center',
    },

});


export default Details;