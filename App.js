import React from 'react';
import 'react-native-reanimated';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator'; // Drawer Navigation para pantallas de Adoptante y Admin
import SplashScreen from './screens/SplashScreen'; // Pantalla de carga
import LoginScreen from './screens/LoginScreen'; // Pantalla de login
import { DarkModeContextProvider } from './contexts/ThemeContext'; // Contexto para el modo oscuro/claro
import { NavigationContainer } from '@react-navigation/native'; // Necesario para navegación
import { createStackNavigator } from '@react-navigation/stack'; // Stack para el flujo de pantallas

const Stack = createStackNavigator(); // Creamos un stack para la navegación

export default function App() {
  return (
    <NavigationContainer>  {/* Solo un NavigationContainer al inicio */}
      <DarkModeContextProvider>  {/* Contexto para el manejo del tema */}
        <StatusBar barStyle="dark-content" backgroundColor="#fff" /> {/* Barra de estado */}
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={DrawerNavigator}  
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </DarkModeContextProvider>
    </NavigationContainer>
  );
}

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
