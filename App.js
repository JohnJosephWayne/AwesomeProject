import { 
  SafeAreaView, 
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import ListHeader2 from "./src/Components/ListHeader2";
import ListFooter from "./src/Components/ListFooter";
import UseState from "./src/Components/UseState";


  const list = [
    {
      name: 'Google',
      url: 'https://google.com',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
    },

  ];
  
function App(){
  return (
    <SafeAreaView style={styles.sectionContainer}  >
      <ScrollView>
          <ListHeader2 />
          <UseState />
          <View style={styles.sectionContainer}>
            {list.map((item, i) => (
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
    background: "080B21;" 
  },

  item:{
    fontSize: 24,
    backgroundColor: '#080B21',
    marginTop: 20,
    marginEnd:20,
    padding: 10,
    borderRadius: 16,
    width: 160,
  },
  itemText:{
    color : "#C5E7E2", 
  }
});

export default App;
