import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AdminHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gestión de Mascotas del Refugio</Text>
      <Button title="Agregar Mascota" onPress={() => {}} />
      <Button title="Editar Mascota" onPress={() => {}} />
      <Button title="Eliminar Mascota" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

export default AdminHomeScreen;
