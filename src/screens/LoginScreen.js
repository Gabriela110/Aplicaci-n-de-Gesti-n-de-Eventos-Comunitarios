import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';

import { router } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase/config';

export default function LoginScreen() {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const login = async () => {

    if (!email || !password) {

      Alert.alert(
        'Error',
        'Complete todos los campos'
      );

      return;
    }

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push('/home');

    } catch (error) {

      Alert.alert(
        'Error',
        'Correo o contraseña incorrectos'
      );
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.logo}>
        EventGo
      </Text>

      <Text style={styles.subtitle}>
        Descubre eventos increíbles
      </Text>

      <Text style={styles.title}>
        Inicia sesión
      </Text>

      <View style={styles.inputContainer}>

        <Ionicons
          name="mail-outline"
          size={20}
          color="#7B61FF"
        />

        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

      </View>

      <View style={styles.inputContainer}>

        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#7B61FF"
        />

        <TextInput
          placeholder="Ingresa contraseña"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

      </View>

      <TouchableOpacity
        onPress={() => router.push('/forgot')}
      >

        <Text style={styles.forgot}>
          ¿Olvidaste tu contraseña?
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={login}
      >

        <Text style={styles.buttonText}>
          Ingresar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/register')}
      >

        <Text style={styles.registerText}>
          ¿No tienes cuenta? Regístrate
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#9B7ACD',

    justifyContent: 'center',

    padding: 25
  },

  logo: {

    fontSize: 42,

    fontWeight: 'bold',

    color: '#fff',

    textAlign: 'center'
  },

  subtitle: {

    textAlign: 'center',

    color: '#EDEDED',

    marginBottom: 40,

    marginTop: 5
  },

  title: {

    fontSize: 30,

    color: '#fff',

    fontWeight: 'bold',

    marginBottom: 25,

    textAlign: 'center'
  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    borderRadius: 15,

    paddingHorizontal: 15,

    marginBottom: 18,

    height: 58
  },

  input: {

    flex: 1,

    marginLeft: 10,

    color: '#000'
  },

  forgot: {

    textAlign: 'center',

    color: '#fff',

    marginBottom: 25
  },

  button: {

    backgroundColor: '#6C4AB6',

    padding: 18,

    borderRadius: 15
  },

  buttonText: {

    textAlign: 'center',

    color: '#fff',

    fontWeight: 'bold',

    fontSize: 16
  },

  registerText: {

    textAlign: 'center',

    marginTop: 25,

    color: '#fff',

    fontSize: 15
  }

});