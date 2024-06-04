import { Text } from "react-native";
import { 
  React
} from "react";


function Clock({currentTime}) {
    
    return (
      <Text style={{textAlign:"center", marginTop:15, marginBottom:10}} >{currentTime}</Text>
    )
  }

  export default Clock;