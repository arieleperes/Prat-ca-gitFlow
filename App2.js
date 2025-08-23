import React,{Component} from "react";
import {Image, Text, View} from "react-native";
import imagem from "../my-app/assets/gato.jpg"
import imagem2 from "../my-app/assets/gato2.jpg"

class App extends Component{
  render(){
    let nome1 = "Gatinho 1"
    let nome2 = "Gatinho 2"

    return(
      <View>
        <Text style={{color:"#39058bff",fontSize:40,margin:15}}>
          Gatinhos anônimos viciados em vinhos 
        </Text>
        <Text>
        <Image source={imagem} style={{width:250,height:250,marginLeft:30}}
        ></Image>
        <Text style={{color:"#39058bff",fontSize:15,margin:15}}>{nome1}</Text>
        <Image source={imagem2} style={{width:250,height:250}}
        ></Image>
        <Text style={{color:"#39058bff",fontSize:15,margin:15}}>{nome2}</Text></Text>
         <Text style={{color:"#39058bff",fontSize:40,marginLeft:120}}>
          Faça parte você também!
        </Text>
      </View>
      
    );
  }
}
//export default App;