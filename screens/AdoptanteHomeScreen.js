import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const AdoptanteHomeScreen = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Obtener mascotas de las APIs
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => setPets([{ name: 'Perro 1', breed: 'Labrador', image: response.data.message }]));

    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(response => setPets(prevPets => [...prevPets, { name: 'Gato 1', breed: 'Siames', image: response.data[0].url }]));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mascotas Disponibles para Adopción</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.petName}>{item.name}</Text>
            <Text style={styles.petBreed}>{item.breed}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  petBreed: {
    fontSize: 14,
    color: '#666',
  },
});

export default AdoptanteHomeScreen;
