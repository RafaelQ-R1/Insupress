/* eslint-disable handle-callback-err */
/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {format} from 'date-fns';
import br from 'date-fns/locale/pt-BR';
import {DataTable} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {pressuresValues} from './data';

import styles from './styles';

const Pressure = () => {
  const [sistolicValue, setSistolicValue] = useState('');
  const [diastolicValue, setDiastolicValue] = useState('');
  const [data] = useState(pressuresValues);

  const saveDataPressures = async () => {
    try {
      if (!sistolicValue || !diastolicValue) {
        alert('Há campos em branco, favor preenchelos');
        return;
      }
      if (isNaN(sistolicValue) || isNaN(diastolicValue)) {
        alert('Preencha os campos apenas com valores numéricos.');
        return;
      }

      const currentDate = new Date();
      var dateFormated = format(currentDate, "dd 'de' MMMM 'de' yyyy", {
        locale: br,
      });

      let storeDataPressures = {};
      storeDataPressures.date = dateFormated;
      storeDataPressures.sistolicValue = sistolicValue;
      storeDataPressures.diastolicValue = diastolicValue;

      const arrayToStore = [storeDataPressures];

      let result = await AsyncStorage.getItem('Pressures');

      if (result !== null) {
        let resultFormated = JSON.parse(result);

        const dateAlreadyRegistered = resultFormated.find(
          (element) => element.date === dateFormated,
        );
        if (dateAlreadyRegistered) {
          return alert('Você já registrou sua pressão hoje.');
        }

        var newArray = JSON.parse(result).concat(arrayToStore);

        await AsyncStorage.setItem('Pressures', JSON.stringify(newArray));
      } else {
        await AsyncStorage.setItem('Pressures', JSON.stringify(arrayToStore));
      }

      let mystring = '';
      if (sistolicValue < 120) {
        mystring = 'ótimo';
      } else if (sistolicValue < 130) {
        mystring = 'normal';
      } else if (sistolicValue >= 130 && sistolicValue <= 139) {
        mystring = 'límitrofe';
      } else if (sistolicValue >= 140 && sistolicValue <= 159) {
        mystring = 'hipertensão arterial estágio 1';
      } else if (sistolicValue >= 160 && sistolicValue <= 179) {
        mystring = 'hipertensão arterial estágio 2';
      } else if (sistolicValue >= 180) {
        mystring = 'hipertensão arterial estágio 3';
      }

      let mystring2 = '';
      if (diastolicValue < 80) {
        mystring2 = 'ótimo';
      } else if (diastolicValue < 85) {
        mystring2 = 'normal';
      } else if (diastolicValue >= 85 && diastolicValue <= 89) {
        mystring2 = 'límitrofe';
      } else if (diastolicValue >= 90 && diastolicValue <= 99) {
        mystring2 = 'hipertensão arterial estágio 1';
      } else if (diastolicValue >= 100 && diastolicValue <= 109) {
        mystring2 = 'hipertensão arterial estágio 2';
      } else if (diastolicValue >= 110) {
        mystring2 = 'hipertensão arterial estágio 3';
      }

      alert(
        `Sua pressão sistólica é de ${sistolicValue}, o que é um valor considerado do tipo  '${mystring}' de acordo com a tabela abaixo.

Já a sua pressão  diastólica é de ${diastolicValue}, o que é um valor considerado do tipo  '${mystring2}' de acordo com a tabela abaixo.`,
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.textBox}>
          <Text style={styles.textContent}>
            Registre aqui o dia, horário e qual o nível da sua pressão. Esses
            dados ficarão gravados no histórico e você poderá checá-los sempre
            que quiser. Depois de registrá-los, será enviada uma mensagem
            avisando se os valores estão satisfatórios de acordo com a tabela e
            o que você deve fazer.
          </Text>
        </View>
        <View style={styles.formView}>
          <TextInput
            keyboardType="numeric"
            style={styles.formInput}
            placeholder="Pressão sistólica..."
            placeholderTextColor="rgba(0, 100, 250, 0.4)"
            onChangeText={(newValue) => setSistolicValue(newValue)}
            value={sistolicValue}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Pressão diastólica..."
            placeholderTextColor="rgba(0, 100, 250, 0.4)"
            onChangeText={(newValue) => setDiastolicValue(newValue)}
            value={diastolicValue}
          />
          <View style={styles.Register}>
            <TouchableHighlight
              style={styles.ButtonRegister}
              onPress={() => {
                saveDataPressures();
              }}>
              <Text>Registrar</Text>
            </TouchableHighlight>
          </View>
        </View>

        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            textDecorationLine: 'underline',
          }}>
          Tabela de níveis de pressão
        </Text>
        <View style={styles.dataTableView}>
          <ScrollView horizontal={true}>
            <DataTable
              style={{
                width: 590,
              }}>
              <DataTable.Header>
                <DataTable.Title>Classificação</DataTable.Title>
                <DataTable.Title numeric>Pressão Sistólica</DataTable.Title>
                <DataTable.Title numeric>Pressão diastólica</DataTable.Title>
              </DataTable.Header>

              {data.map((item) => {
                return (
                  <View key={item.id}>
                    <DataTable.Row
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <DataTable.Cell>{item.classification}</DataTable.Cell>
                      <DataTable.Cell numeric>
                        {item.sistolicPression}
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        {item.distolicPression}
                      </DataTable.Cell>
                    </DataTable.Row>
                  </View>
                );
              })}
            </DataTable>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Pressure;
