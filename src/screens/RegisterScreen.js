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

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase/config';

export default function RegisterScreen() {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const register = async () => {

    if (!name || !email || !password || !confirmPassword) {

      Alert.alert(
        'Error',
        'Complete todos los campos'
      );

      return;
    }

    if (!email.includes('@')) {

      Alert.alert(
        'Error',
        'Correo inválido'
      );

      return;
    }

    if (password.length < 6) {

      Alert.alert(
        'Error',
        'La contraseña debe tener mínimo 6 caracteres'
      );

      return;
    }

    if (password !== confirmPassword) {

      Alert.alert(
        'Error',
        'Las contraseñas no coinciden'
      );

      return;
    }

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      Alert.alert(
        'Éxito',
        'Usuario registrado'
      );

      router.push('/home');

    } catch (error) {

      Alert.alert(
        'Error',
        error.message
      );
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.logo}>
        EventGo
      </Text>

      <Text style={styles.title}>
        Registrarse
      </Text>

      <View style={styles.inputContainer}>

        <Ionicons
          name="person-outline"
          size={20}
          color="#7B61FF"
        />

        <TextInput
          placeholder="Ingresa tu nombre"
          placeholderTextColor="#999"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

      </View>

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

      <View style={styles.inputContainer}>

        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#7B61FF"
        />

        <TextInput
          placeholder="Confirmar contraseña"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={register}
      >

        <Text style={styles.buttonText}>
          Registrarse
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/')}
      >

        <Text style={styles.loginText}>
          ¿Ya tienes cuenta? Inicia sesión
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

    textAlign: 'center',

    marginBottom: 20
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

  button: {

    backgroundColor: '#E96BB3',

    padding: 18,

    borderRadius: 15,

    marginTop: 10
  },

  buttonText: {

    textAlign: 'center',

    color: '#fff',

    fontWeight: 'bold',

    fontSize: 16
  },

  loginText: {

    textAlign: 'center',

    marginTop: 25,

    color: '#fff',

    fontSize: 15
  }

});