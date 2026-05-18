import React, { useContext } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import { ImcProvider, ImcContext } from './context/ImcContext';
import ResultadoIMC from './components/ResultadoIMC';

const Contenido = () => {

  const {
    peso,
    setPeso,
    altura,
    setAltura
  } = useContext(ImcContext);

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Calculadora IMC
      </Text>

      {/* PESO */}

      <Text style={styles.label}>
        Peso: {peso} KG
      </Text>

      <View style={styles.botonesContainer}>

        <Button
          title="+ 1 KG"
          onPress={() => setPeso(peso + 1)}
        />

        <Button
          title="- 1 KG"
          onPress={() => setPeso(peso - 1)}
        />

      </View>

      {/* ALTURA */}

      <Text style={styles.label}>
        Altura: {altura.toFixed(2)} M
      </Text>

      <View style={styles.botonesContainer}>

        <Button
          title="+ 1 CM"
          onPress={() => setAltura(altura + 0.01)}
        />

        <Button
          title="- 1 CM"
          onPress={() => setAltura(altura - 0.01)}
        />

      </View>

      {/* RESULTADOS */}

      <ResultadoIMC />

    </View>

  );
};

export default function App() {

  return (

    <ImcProvider>

      <Contenido />

    </ImcProvider>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },

  titulo: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'bold'
  },

  label: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20
  },

  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15
  }

});