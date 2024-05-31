import { Text } from "react-native";
import { 
  React
} from "react";


function Clock({currentText}) {
    
    return (
      <Text style={{textAlign:"center", marginTop:15, marginBottom:10}} >{currentText}</Text>
    )
  }

  export default Clock;