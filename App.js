import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from './src/components/Details';
import HomeScreen from './src/Components/Navigation';
import List from './src/Components/List';
import LoginPage from './src/Components/LoginPage';

const App = () => {

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    if (!handleLogin()) {
      navigation.navigate('LoginPage');
    }
  }, [navigation]);
  
  return (

    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginPage" component={LoginPage} options= {{headerShown: false}} />
          <Stack.Screen name="Home" component={HomeScreen} options= {{headerShown: false}} />
          <Stack.Screen name="Liste" component={List} options= {{headerShown: false}}/>
          <Stack.Screen name="Details" component={Details} options= {{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flex: 2,
    marginBottom: 16,
  },
  item: {
    color: '#340834',
  },
  block: {
    flex: 1,
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: '#340834',
    borderRadius:5,
    alignItems: 'center',
}
});

export default App;