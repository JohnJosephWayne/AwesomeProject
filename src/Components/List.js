import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

function App() {
  const [siteName, setSiteName] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [listItems, setList] = useState([
  
  ]);

  useEffect(() => {
    loadListFromStorage();
  }, []);

  useEffect(() => {
      saveListToStorage(listItems);
  }, [listItems]);

  const loadListFromStorage = async () => {
    try {
      const storedList = await AsyncStorage.getItem('listItems');

      setList(JSON.parse(storedList));
    } catch (error) {
      console.error('Erreur lors du chargement depuis AsyncStorage :', error);
    }
  };

  const saveListToStorage = async (storedList) => {
    try {
      await AsyncStorage.setItem('listItems', JSON.stringify(storedList));
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement dans AsyncStorage :', error);
    }
  };

  const handleAddSite = () => {
    if (!siteName || !siteUrl) return;

    const newSite = {
      name: siteName,
      url: siteUrl,
    };

    setList([...listItems, newSite]);

    setSiteUrl('');
    setSiteName('');
  };

  const deleteSites = async () => {
    if (listItems !== null){
      try {
        await AsyncStorage.clear('listItems').then(() => {
          setList([]);
        })
    }
    catch (exception) {
        return false;
    }

    }
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nom de site"
        value={siteName}
        onChangeText={text => setSiteName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="URL"
        value={siteUrl}
        onChangeText={text => setSiteUrl(text)}
      />
      <Button style={styles.clic} title="Ajouter" onPress={handleAddSite} />

      <Button style={styles.clic} title="Supprimer" onPress={deleteSites} />

      <View style={styles.sectionContainer}>
        
        {listItems != null && listItems.map((item, i) => (
          <View style={styles.item} key={i}>
            <Text style={styles.itemText}>
              {item.name}
            </Text>
            <Text style={styles.itemText}>
              {item.url}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    fontSize: 24,
    backgroundColor: '#080B21',
    marginTop: 20,
    marginEnd: 20,
    padding: 10,
    borderRadius: 16,
    width: 160,
  },
  itemText: {
    color: "#C5E7E2",
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  clic: {
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
  }
});

export default App;
