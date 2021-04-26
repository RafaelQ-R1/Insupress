import React from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import Syringe from '../../assets/images/syringe.png';
import bloodTest from '../../assets/images/blood-test.png';
import medicalHistory from '../../assets/images/medical-history.png';
import pressure from '../../assets/images/pressure.png';

import styles from './styles';

const Home = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Selecione uma das opções no menu abaixo
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.element}>
          <TouchableOpacity onPress={() => navigation.navigate('Insluina')}>
            <Image style={styles.image} source={Syringe} />
          </TouchableOpacity>
          <Text style={styles.elementText}>Registrar glicose</Text>
        </View>

        <View style={styles.element}>
          <TouchableOpacity onPress={() => navigation.navigate('Pressão')}>
            <Image style={styles.image} source={pressure} />
          </TouchableOpacity>
          <Text style={styles.elementText}>Registrar pressão</Text>
        </View>

        <View style={styles.element}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Sobre a Insulina')}>
            <Image style={styles.image} source={bloodTest} />
          </TouchableOpacity>
          <Text style={styles.elementText}>Sobre a glicose</Text>
        </View>

        <View style={styles.element}>
          <TouchableOpacity onPress={() => navigation.navigate('Histórico')}>
            <Image style={styles.image} source={medicalHistory} />
          </TouchableOpacity>
          <Text style={styles.elementText}>Ver históricos</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
