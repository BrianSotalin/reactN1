import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet,Button, Text, View,TextInput, Alert } from 'react-native';

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  const [res, setRes] = useState(0);
  
  const [txt, setTxt] = useState(null);
   
 

  return (
    <View style={styles.container}>
      <Text>Calculadora IMC</Text>
      <TextInput style={styles.input}  placeholder="Ingrese peso en Kg" keyboardType="numeric"  onChangeText={(txt)=>{setX(txt)}}/>
        <TextInput style={styles.input} placeholder="Ingrese altura en mts" keyboardType="numeric"   onChangeText={(txt)=>{setY(txt)}}/>
      <StatusBar style="auto" />
      <Button title="Calcular" onPress={()=>{
         var aux= (y*y);
      var imc=x/aux; 
         setRes(imc);
         if(imc<=18.5){
          setTxt("Peso inferior al normal");
         }else if(imc >18.5 && imc <=25){
          setTxt("Peso normal");
         }else if (imc >25 && imc <=30 ){
          setTxt("Peso superior a lo normal");
         }else if(imc>30){
          setTxt("Obesidad");
         }else if(imc<0){
           Alert.alert("Error","Datos ingresados erroneos");
         }
    
      }}> </Button>

      <Text>IMC: {res}</Text>
      <Text>{txt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
