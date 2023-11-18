import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const Login = () => {
  return (
    <ImageBackground source={require('../assets/login-aplm.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
        <Button title='Entrar' onPress={() => alert('Login Pressed')} color="green" />
        <Text>Ainda não tenho uma conta</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: 'green',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default Login;
