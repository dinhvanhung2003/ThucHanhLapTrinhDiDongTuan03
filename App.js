import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './components/FirstScreen'; 
import Screen1a from './components/Screen1a';
import Screen1e from './components/Screen1e';
import Screen1d from './components/Screen1d';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FirstScreen')}
      >
        <Text style={styles.buttonText}>FirstScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen1a')}
      >
        <Text style={styles.buttonText}>Screen 1a</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen1d')}
      >
        <Text style={styles.buttonText}>Screen 1d</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen1e')}
      >
        <Text style={styles.buttonText}>Screen 1e</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10, 
    padding: 10,
    backgroundColor: '#33CCFF',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Screen1a" component={Screen1a} />
        <Stack.Screen name="Screen1d" component={Screen1d} />
        <Stack.Screen name="Screen1e" component={Screen1e} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
