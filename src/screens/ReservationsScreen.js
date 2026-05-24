import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function ReservationsScreen() {

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Mis Reservas
      </Text>

      <View style={styles.card}>

        <Text style={styles.event}>
          Festival de Música
        </Text>

        <Text style={styles.info}>
          San Salvador
        </Text>

        <Text style={styles.info}>
          25 Mayo 2026
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.event}>
          Feria Tecnológica
        </Text>

        <Text style={styles.info}>
          Santa Ana
        </Text>

        <Text style={styles.info}>
          30 Mayo 2026
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#9B7ACD',

    padding: 20,

    paddingTop: 70
  },

  title: {

    fontSize: 30,

    fontWeight: 'bold',

    color: '#fff',

    marginBottom: 25
  },

  card: {

    backgroundColor: '#fff',

    borderRadius: 20,

    padding: 20,

    marginBottom: 20
  },

  event: {

    fontSize: 22,

    fontWeight: 'bold',

    marginBottom: 10
  },

  info: {

    color: '#444',

    marginBottom: 5
  }

});