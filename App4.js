import React,{Component} from "react";
import {Text, View} from "react-native";

class App extends Component{
  render(){

    return(
      <View style={{flex:1, flexDirection:'column', alignItems:'stretch', justifyContent:"space-around"}}>
        <View style={{width:50,height:50,backgroundColor:"rgba(129, 225, 226, 1)"}}> </View>
        <View style={{width:50,height:50, backgroundColor:"#ec94f0ff"}}></View>
        <View style={{width:50,height:50,backgroundColor:"yellow"}}></View>

      </View>
    );
  }
}

//export default App;
