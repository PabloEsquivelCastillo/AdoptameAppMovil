import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdoptanteHomeScreen from '../screens/AdoptanteHomeScreen'; // Pantalla para Adoptante
import AdminHomeScreen from '../screens/AdminHomeScreen'; // Pantalla para Admin
import { Ionicons } from '@expo/vector-icons'; // Iconos para el Drawer

const Drawer = createDrawerNavigator(); // Crear el Drawer Navigator

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Adoptante Home">
      <Drawer.Screen
        name="Adoptante Home"
        component={AdoptanteHomeScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="paw" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Admin Home"
        component={AdminHomeScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="md-settings" size={24} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
