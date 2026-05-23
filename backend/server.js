import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

export default function App() {

  const tareas = [
    { id: '1', todo: 'Hacer examen' },
    { id: '2', todo: 'Hacer tarea' },
    { id: '3', todo: 'Estudiar Node.js' },
    { id: '4', todo: 'Aprender React Native' },
    { id: '5', todo: 'Aprender JavaScript' },
    { id: '6', todo: 'Trabajar' },
    { id: '7', todo: 'Hacer ejercicio' },
    { id: '8', todo: 'Ir de vacaciones' },
    { id: '9', todo: 'Comprar despensa' },
    { id: '10', todo: 'Jugar Videojuegos' },
    { id: '11', todo: 'Practicar el piano' },
    { id: '12', todo: 'Planchar mi ropa' },
    { id: '13', todo: 'Bolear mis zapatos' },
    { id: '14', todo: 'Jugar Basquetbol' },
    { id: '15', todo: 'Salir a correr' },
    { id: '16', todo: 'Dormir' }
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Tareas
      </Text>

      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>
              {item.todo}
            </Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  item: {
    backgroundColor: '#ddd',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10
  },

  texto: {
    fontSize: 18
  }
});