import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://proyectorender-x32i.onrender.com/';

  useEffect(() => {
    fetchTareas();
  }, []);

  const fetchTareas = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTareas(data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tareas</Text>
      
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>{item.todo}</Text>
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