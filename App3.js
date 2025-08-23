import React,{Component} from "react";
import {Text, View,StyleSheet} from "react-native";

class App extends Component{
  render(){
    let nome = "Steve"

    return(
      <View style={{marginTop:20}}>
        <Text style={styles.textoPrincipal}> Eu sou o texto 1 </Text>
        <Text style={styles.texto2}> Eu sou o texto 2 </Text>
        <Text style={styles.texto3}> Eu sou o texto 3 </Text>
        <Text style={styles.texto4}> Eu sou o texto 4 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textoPrincipal:{
    fontSize:25,
    color:'green'
  },
  texto2:{
    fontSize:35,
    color:'red'
  },
    texto3:{
    fontSize:10,
    color:'blue'
  },
  texto4:{
    fontSize:20,
    color:'yellow'
  },

})

//export default App;
