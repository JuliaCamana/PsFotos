import React from 'react'
import {View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'

const Cadastro = () => {
    return(
       <ImageBackground source={require('../assets/login-aplm.jpg')} style={styles.background}>
         <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput style= {styles.input } placeholder="Nome" />
            <TextInput style= {styles.input } placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry/> 
            <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry/> 
            <Button title='Cadastrar' onPress={() => alert('Cadastro Pressed')} color="green"/>  
            <Text> Ja tenho uma conta</Text>        
         </View>
       </ImageBackground>  
       
       )
};

const styles = StyleSheet.create({
    background:{
        flex: 1,
        resizeMode: 'center',
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 16,
    },
    title:{
        fontSize: 24,
        marginBottom: 16,
        color: 'green',
    },
    input:{
        height: 40,
        width: 200,
        borderColor:'green',
        borderWidth: 1, 
        marginBottom: 16, 
        paddingLeft: 8,

    }

});

export default Cadastro;