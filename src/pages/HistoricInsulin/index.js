/* eslint-disable no-alert */
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';

const HistoricInsulin = () => {
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    getDataOnAsyncStorage();
  }, []);

  const getDataOnAsyncStorage = async () => {
    try {
      const getRegisters = await AsyncStorage.getItem('Glucoses');

      let result = JSON.parse(getRegisters);
      setRegisters(result);
    } catch (error) {
      alert(error);
    }
  };
  const removeItem = async (date) => {
    try {
      const glucoseRegisters = await AsyncStorage.getItem('Glucoses');
      let glucoseObject = JSON.parse(glucoseRegisters);
      const newGlucoseRegisters = glucoseObject.filter(function (e) {
        return e.date !== date;
      });

      await AsyncStorage.setItem(
        'Glucoses',
        JSON.stringify(newGlucoseRegisters),
      );

      getDataOnAsyncStorage();
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const DefaultMessage = () => {
    return (
      <View style={styles.defaulMessages}>
        <Text style={styles.message}>
          Você não tem nenhum dado de glicose registrado!
        </Text>
      </View>
    );
  };

  return !registers || registers.length < 1 ? (
    <DefaultMessage />
  ) : (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={registers}
      renderItem={({item}) => {
        return (
          <>
            <View style={styles.container}>
              <View style={styles.flatItem}>
                <Text style={styles.textItem}> Dia: {item.date}</Text>
                <Text style={styles.textItem}>
                  Nível de glicose: {item.quantityInJejum} mg/dl
                </Text>
                <Text style={styles.textItem}>
                  Nível de glicose 2 horas após 75 mg:
                  {item.quantityAfter75mgInTwoHours} mg/dl
                </Text>
                <Icon
                  name="delete"
                  color="red"
                  size={25}
                  onPress={() => {
                    removeItem(item.date);
                  }}
                />
              </View>
            </View>
          </>
        );
      }}
    />
  );
};

export default HistoricInsulin;
