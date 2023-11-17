import React from 'react'
import {View, Text, TextInput, Button, StyleSheet,  } from 'react-native'
import BarraSuperior from '../componentes/BarraSuperior';
import BarraDeNavegacao from '../componentes/BarradeNavegacao';

const Home = () => {
    return(
      
         <View style={styles.container}>
              <BarraSuperior/>
              <Text>Sem albums</Text>
              <Button style={styles.button} title='Criar album'/>
              <BarraDeNavegacao/>   
         </View>
      
       
       )
};

const styles = StyleSheet.create({
   

    button:{
        height: 40,
        width: 200,
        borderColor:'green',
    }

});

export default Home;