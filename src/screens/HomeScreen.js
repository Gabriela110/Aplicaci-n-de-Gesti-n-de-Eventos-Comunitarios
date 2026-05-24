import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { auth } from '../firebase/config';

import { signOut } from 'firebase/auth';

import { router } from 'expo-router';

export default function HomeScreen() {

  const userName =
    auth.currentUser?.email?.split('@')[0] || 'Usuario';

  const reserveEvent = (eventName) => {

    Alert.alert(
      'Reserva Exitosa',
      `Reservaste: ${eventName}`
    );
  };

  const logout = async () => {

    await signOut(auth);

    router.replace('/');
  };

  return (

    <ScrollView style={styles.container}>

      <View style={styles.topBar}>

        <View style={styles.searchContainer}>

          <Ionicons
            name="search"
            size={18}
            color="#555"
          />

          <TextInput
            placeholder="Buscar Evento"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />

        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={logout}
        >

          <Ionicons
            name="log-out-outline"
            size={30}
            color="#fff"
          />

        </TouchableOpacity>

      </View>

      <Text style={styles.welcome}>
        ¡Bienvenida {userName}!
      </Text>

      <Text style={styles.sectionTitle}>
        Eventos Destacados
      </Text>

      <TouchableOpacity
        style={styles.reservationButton}
        onPress={() => router.push('/reservations')}
      >

        <Text style={styles.reservationText}>
          Ver Mis Reservas
        </Text>

      </TouchableOpacity>

      <View style={styles.card}>

        <Text style={styles.eventTitle}>
          Festival de Música
        </Text>

        <Text style={styles.eventText}>
          San Salvador
        </Text>

        <Text style={styles.eventText}>
          25 Mayo 2026
        </Text>

        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() =>
            reserveEvent('Festival de Música')
          }
        >

          <Text style={styles.reserveText}>
            Reservar Evento
          </Text>

        </TouchableOpacity>

      </View>

      <View style={styles.card}>

        <Text style={styles.eventTitle}>
          Feria Tecnológica
        </Text>

        <Text style={styles.eventText}>
          Santa Ana
        </Text>

        <Text style={styles.eventText}>
          30 Mayo 2026
        </Text>

        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() =>
            reserveEvent('Feria Tecnológica')
          }
        >

          <Text style={styles.reserveText}>
            Reservar Evento
          </Text>

        </TouchableOpacity>

      </View>

      <View style={styles.card}>

        <Text style={styles.eventTitle}>
          Conferencia Gamer
        </Text>

        <Text style={styles.eventText}>
          San Miguel
        </Text>

        <Text style={styles.eventText}>
          10 Junio 2026
        </Text>

        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() =>
            reserveEvent('Conferencia Gamer')
          }
        >

          <Text style={styles.reserveText}>
            Reservar Evento
          </Text>

        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#9B7ACD',

    paddingTop: 70,

    paddingHorizontal: 20
  },

  topBar: {

    flexDirection: 'row',

    alignItems: 'center'
  },

  searchContainer: {

    flex: 1,

    backgroundColor: '#fff',

    borderRadius: 20,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 15,

    height: 45
  },

  searchInput: {

    marginLeft: 10,

    flex: 1,

    color: '#000'
  },

  profileButton: {

    marginLeft: 15
  },

  welcome: {

    fontSize: 28,

    fontWeight: 'bold',

    marginTop: 25,

    color: '#fff'
  },

  sectionTitle: {

    marginTop: 30,

    marginBottom: 15,

    color: '#fff',

    fontSize: 22,

    fontWeight: 'bold'
  },

  reservationButton: {

    backgroundColor: '#E96BB3',

    padding: 14,

    borderRadius: 12,

    marginBottom: 20
  },

  reservationText: {

    textAlign: 'center',

    color: '#fff',

    fontWeight: 'bold'
  },

  card: {

    backgroundColor: '#fff',

    borderRadius: 20,

    padding: 20,

    marginBottom: 20
  },

  eventTitle: {

    fontSize: 22,

    fontWeight: 'bold',

    marginBottom: 10
  },

  eventText: {

    marginBottom: 5,

    color: '#444'
  },

  reserveButton: {

    backgroundColor: '#6C4AB6',

    padding: 14,

    borderRadius: 12,

    marginTop: 15
  },

  reserveText: {

    textAlign: 'center',

    color: '#fff',

    fontWeight: 'bold'
  }

});