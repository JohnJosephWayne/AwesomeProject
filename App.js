import { 
  SafeAreaView, 
  ScrollView,
  StyleSheet,
} from "react-native";
import ListHeader2 from "./src/Components/ListHeader2";
import ListFooter from "./src/Components/ListFooter";
import UseState from "./src/Components/UseState";
import List from "./src/Components/List";



function App(){
  return (
    <SafeAreaView style={styles.sectionContainer}  >
      <ScrollView>
          <ListHeader2 />
          <UseState />
          <List />
          <ListFooter />
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    textAlign: "center",
    display:"flex",
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center",
  }
});

export default App;
