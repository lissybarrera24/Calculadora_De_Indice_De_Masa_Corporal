import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImcContext } from '../context/ImcContext';

const ResultadoIMC = () => {

  const { imc, clasificacion } = useContext(ImcContext);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>
        IMC: {imc}
      </Text>

      <Text style={styles.texto}>
        Clasificación: {clasificacion}
      </Text>

    </View>
  );
};

export default ResultadoIMC;

const styles = StyleSheet.create({

  container: {
    marginTop: 40,
    alignItems: 'center'
  },

  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5
  }

});