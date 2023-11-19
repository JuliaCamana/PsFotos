import React from 'react'
import {View, Text, TextInput, Button, StyleSheet,  } from 'react-native'
import BarraSuperior from '../componentes/BarraSuperior';
import BarraDeNavegacao from '../componentes/BarradeNavegacao';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Home = () => {
    return(
        <SafeAreaProvider>
         
              <BarraSuperior/>
              <Text>Sem albums</Text>
              <Button  title='Criar album'/>
              <BarraDeNavegacao/>   
        
         </SafeAreaProvider>
      
       
       )
};



export default Home;