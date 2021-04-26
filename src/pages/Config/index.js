/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dialog from '../../components/Dialog';
import styles from './styles';

const Config = () => {
  const [statusbar, setStatusbar] = useState(false);
  const [Dialog1, setDialog1] = useState(false);
  const [Dialog2, setDialog2] = useState(false);

  const toggleStatusBart = () => {
    setStatusbar(!statusbar);
  };

  const showDialog1 = () => {
    setDialog1(true);
  };

  const showDialog2 = () => {
    setDialog2(true);
  };

  const Cancel1 = () => {
    setDialog1(false);
  };
  const Cancel2 = () => {
    setDialog2(false);
  };

  const clearPressureRegisters = async () => {
    try {
      setDialog1(false);
      AsyncStorage.removeItem('Pressures');
      alert('Todos os registros de pressão  foram removidos');
    } catch (err) {
      alert('erro', err);
      return;
    }
  };
  const clearGlucoseRegisters = async () => {
    try {
      setDialog2(false);
      AsyncStorage.removeItem('Glucoses');
      alert('Todos os registros de glicose  foram removidos');
    } catch (err) {
      alert('erro', err);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <StatusBar hidden={statusbar} />
        <Text style={styles.Title}>Configurações: </Text>
      </View>
      <View style={styles.optionsView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            toggleStatusBart();
          }}>
          <Text style={styles.buttonText}>Esconder barra de status</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showDialog1}>
          <Text style={styles.buttonText}>Limpar histórico de pressões</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showDialog2}>
          <Text style={styles.buttonText}>Limpar histórico de glicose</Text>
        </TouchableOpacity>
        <Dialog
          Title="Deseja deletar o histórico de pressões?"
          Description="Essa ação irá deletar todo o histórico de pressões e não poderá ser desfeita."
          isVisible={Dialog1}
          onClick1={Cancel1}
          onClick2={clearPressureRegisters}
        />
        <Dialog
          Title="Deseja deletar o histórico de glicoses?"
          Description="Essa ação irá deletar todo o histórico de glicoses e não poderá ser desfeita."
          isVisible={Dialog2}
          onClick1={Cancel2}
          onClick2={clearGlucoseRegisters}
        />
      </View>
    </View>
  );
};

export default Config;
