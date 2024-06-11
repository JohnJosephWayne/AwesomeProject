import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';

const List = ({navigation}) => {
    const [itemAjouter, setItemAjouter] = useState('');
    const [items, setItems] = useState(["Item 1", "Item 2"]);

    useEffect(() => {
        chargerListe();
    }, []);

    useEffect(() => {
        if (items.length === 0) {
            navigation.navigate('Home');
        }
    }, [items]);

    const ajoutItem = () => {
        if (itemAjouter.trim()) {
            const newItems = [...items, itemAjouter];
            setItems(newItems);
            setItemAjouter('');
            enregistrerItems(newItems);
        }
    };

    const chargerListe = async () => {
        try {
            const storedItems = await AsyncStorage.getItem('items');
            if (storedItems) {
                setItems(JSON.parse(storedItems));
            }
        } catch (error) {
            console.error('Erreur lors du chargement des items :', error);
        }
    };

    const enregistrerItems = async (newItems) => {
        try {
            await AsyncStorage.setItem('items', JSON.stringify(newItems));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des éléments :', error);
        }
    };

    const supprimerItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        enregistrerItems(newItems);
    };

    return (
        <View style={styles.container}>
            <ListHeader />
            <TextInput
                placeholder="Saisir un élément"
                value={itemAjouter}
                onChangeText={setItemAjouter}
                style={styles.input}
            />
            <TouchableOpacity onPress={ajoutItem} style={styles.ajoutButton}>
                <Text style={styles.ajoutButtonText}>Ajouter</Text>
            </TouchableOpacity>
            <FlatList
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.liste}>{item}</Text>
                        <TouchableOpacity onPress={() => supprimerItem(index)} style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>Supprimer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Details', {item})} style={styles.voirPlusButton}>
                            <Text style={styles.deleteButtonText}>Voir plus</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <ListFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6D0E6',
    },
    title: {
        fontSize: 24,
        color: '#340834',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#B06CB0',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: '#340834',
    },
    liste: {
        fontSize: 18,
        color: '#340834',
        padding: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#B06CB0',
        paddingVertical: 10,
    },
    ajoutButton: {
        backgroundColor: "#B06CB0",
        padding: 7,
        borderRadius: 5,
        marginHorizontal: 25,
    },
    ajoutButtonText: {
        color: "#e2f6c3",
        fontSize: 18,
        fontWeight: 'semi-bold',
        textAlign: 'center',
    },
    deleteButton: {
        backgroundColor: '#cdef97',
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
    },
    deleteButtonText: {
        color: '#340834',
        fontSize: 12,
    },
    voirPlusButton: {
        backgroundColor: "#e597ef",
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
    }
});

export default List;