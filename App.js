import React,{Component} from "react";
import {Text, View,StyleSheet,TextInput} from "react-native";

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      nome: "Steve"
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.input}></TextInput>
        <text style={styles.texto}>Bem Vindo</text>
      </View>
      //add
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
    height:45,
    borderWidth:1,
    borderColor: "#222",
    margin: 10,
  },
  texto:{
    textoAlign:'center',
    fontSize:25
  }
})

export default App;
