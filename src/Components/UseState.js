import { 
  React,
  useEffect,
  useState
} from "react";
import{
  Button, 
  StyleSheet,
  View
} from "react-native";

import Clock from "./clock";


function UseState() {
  const [currentText, setCurrentText] = useState(new Date().toLocaleTimeString());
  
  function handlePress() {
    setCurrentText(new Date().toLocaleTimeString());
  }
  
  return (
    <View>
      <Clock currentText={setCurrentText} />
      <Button title="Actualiser l'heure" onPress={currentText}/>
    </View>
  );
}

export default UseState;

