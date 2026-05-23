import React, {
  useEffect,
  useState
} from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

export default function App() {

  const [tareas, setTareas] = useState([]);

  const API =
    'https://proyectorender-x32i.onrender.com/tareas';

  const obtenerTareas = async () => {

    try {

      const response = await fetch(API);

      const data = await response.json();

      setTareas(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    obtenerTareas();

  }, []);

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
