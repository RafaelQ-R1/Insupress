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
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {glicoseValues} from './data';

import styles from './styles';

const Insulin = () => {
  const [quantityInJejum, setQuantityInJejum] = useState('');
  const [quantityAfter75mgInTwoHours, setQuantityAfter] = useState('');
  const [data] = useState(glicoseValues);

  const saveDataPressures = async () => {
    try {
      if (!quantityInJejum || !quantityAfter75mgInTwoHours) {
        alert('Há campos em branco, favor preenchelos');
        return;
      }
      if (isNaN(quantityInJejum) || isNaN(quantityAfter75mgInTwoHours)) {
        alert('Preencha os campos apenas com valores numéricos.');
        return;
      }

      const currentDate = new Date();
      var dateFormated = format(currentDate, "dd 'de' MMMM 'de' yyyy", {
        locale: br,
      });

      let storeDataPressures = {};
      storeDataPressures.date = dateFormated;
      storeDataPressures.quantityInJejum = quantityInJejum;
      storeDataPressures.quantityAfter75mgInTwoHours = quantityAfter75mgInTwoHours;

      const arrayToStore = [storeDataPressures];

      let result = await AsyncStorage.getItem('Glucoses');

      if (result !== null) {
        let resultFormated = JSON.parse(result);

        const dateAlreadyRegistered = resultFormated.find(
          (element) => element.date === dateFormated,
        );
        if (dateAlreadyRegistered) {
          return alert('você já registrou seus níves de glicose hoje');
        }
        var newArray = JSON.parse(result).concat(arrayToStore);

        await AsyncStorage.setItem('Glucoses', JSON.stringify(newArray));
      } else {
        await AsyncStorage.setItem('Glucoses', JSON.stringify(arrayToStore));
      }

      let mystring = '';
      if (quantityInJejum < 120) {
        mystring = 'glicemia de jejum alterada';
      } else if (quantityInJejum < 130) {
        mystring = 'tolerância à glicose diminuída';
      } else if (quantityInJejum >= 130 && quantityInJejum <= 139) {
        mystring = 'diabetes mellitus';
      }

      let mystring2 = '';
      if (quantityAfter75mgInTwoHours < 80) {
        mystring2 = 'glicemia de jejum alterada';
      } else if (quantityAfter75mgInTwoHours < 85) {
        mystring2 = 'tolerância à glicose diminuída';
      } else if (
        quantityAfter75mgInTwoHours >= 85 &&
        quantityAfter75mgInTwoHours <= 89
      ) {
        mystring2 = 'diabetes mellitus';
      }

      alert(
        `Seu nível de glicose em jejum é de ${quantityInJejum}, o que é um valor considerado do tipo  '${mystring}' de acordo com a tabela abaixo.

Já seu nível de glicose 2 horas após consumir 75mg é de ${quantityAfter75mgInTwoHours}, o que é um valor considerado do tipo  '${mystring2}' de acordo com a tabela abaixo.`,
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
            style={styles.formInput}
            placeholder="Quantidade em Jejum..."
            placeholderTextColor="rgba(0, 100, 250, 0.4)"
            onChangeText={(newValue) => setQuantityInJejum(newValue)}
            value={quantityInJejum}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Qtd 2h após 75 mg de glicose..."
            placeholderTextColor="rgba(0, 100, 250, 0.4)"
            onChangeText={(newValue) => setQuantityAfter(newValue)}
            value={quantityAfter75mgInTwoHours}
          />
          <View style={styles.Register}>
            <TouchableOpacity
              style={styles.ButtonRegister}
              onPress={() => {
                saveDataPressures();
              }}>
              <Text>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            textDecorationLine: 'underline',
          }}>
          Tabela de níveis de glicose
        </Text>
        <View style={styles.dataTableView}>
          <ScrollView horizontal={true}>
            <DataTable
              style={{
                width: 790,
              }}>
              <DataTable.Header>
                <DataTable.Title>Categorias</DataTable.Title>
                <DataTable.Title numeric>Jejum*</DataTable.Title>
                <DataTable.Title numeric>
                  2h após 75 mg de glicose
                </DataTable.Title>
                <DataTable.Title numeric>Casual**</DataTable.Title>
              </DataTable.Header>

              {data.map((item, index) => {
                return (
                  <View key={item.id}>
                    <DataTable.Row
                      key={index}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <DataTable.Cell>{item.Categories}</DataTable.Cell>
                      <DataTable.Cell numeric>{item.jejum}</DataTable.Cell>
                      <DataTable.Cell numeric>
                        {item.afterTwoHours}
                      </DataTable.Cell>
                      <DataTable.Cell numeric>{item.Casual}</DataTable.Cell>
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

export default Insulin;
