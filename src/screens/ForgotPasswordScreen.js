import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';

import { sendPasswordResetEmail } from 'firebase/auth';

import { auth } from '../firebase/config';

export default function ForgotPasswordScreen() {

  const [email, setEmail] = useState('');

  const resetPassword = async () => {

    if (!email) {

      Alert.alert(
        'Error',
        'Ingrese un correo'
      );

      return;
    }

    try {

      await sendPasswordResetEmail(
        auth,
        email
      );

      Alert.alert(
        'Éxito',
        'Correo enviado'
      );

    } catch (error) {

      Alert.alert(
        'Error',
        'No se pudo enviar el correo'
      );
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Recuperar Contraseña
      </Text>

      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={resetPassword}
      >

        <Text style={styles.buttonText}>
          Enviar correo
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    padding: 25,

    backgroundColor: '#9B7ACD'
  },

  title: {

    fontSize: 28,

    fontWeight: 'bold',

    color: '#fff',

    marginBottom: 25,

    textAlign: 'center'
  },

  input: {

    backgroundColor: '#fff',

    borderRadius: 15,

    padding: 18,

    marginBottom: 20
  },

  button: {

    backgroundColor: '#6C4AB6',

    padding: 18,

    borderRadius: 15
  },

  buttonText: {

    color: '#fff',

    textAlign: 'center',

    fontWeight: 'bold'
  }

});