import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const Historics = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Históricos de registros</Text>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('HistoricInsulin')}>
        <Text style={styles.textButton}>Ver histórico de GLICOSE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('HistoricPressure')}>
        <Text style={styles.textButton}>Ver histórico de PRESSÃO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Historics;
