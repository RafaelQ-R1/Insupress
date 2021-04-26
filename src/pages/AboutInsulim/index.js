/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';

import styles from './styles';

const AboutInsulim = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.pageTitle}>Sobre insulina</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.itemBox}>
          <Text style={styles.textTitle}>O que é a glicose?</Text>
          <View style={styles.textBox}>
            <Text style={styles.textContent}>
              A glicose, glucose ou dextrose, é um monossacarídeo e é um dos
              carboidratos mais importantes na biologia.As células a usam como
              fonte de energia e intermediário metabólico. A glicose é um dos
              principais produtos da fotossíntese e inicia a respiração celular
              em seres procariontes e eucariontes. É um cristal sólido de sabor
              adocicado, de fórmula molecular C6H12O6, encontrado na natureza na
              forma livre ou combinada. Juntamente com a frutose e a galactose,
              é o carboidrato fundamental de carboidratos maiores, como
              sacarose, lactose e maltose. Amido e celulose são polímeros de
              glucose.
            </Text>
          </View>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.textTitle}>Para que serve a glicose?</Text>
          <View style={styles.textBox}>
            <Text style={styles.textContent}>
              No metabolismo, a glicose é uma das principais fontes de energia e
              fornece 4 calorias de energia por grama. A glicose hidratada (como
              no soro glicosado) fornece 3,4 calorias por grama. Sua degradação
              química durante o processo de respiração celular dá origem a
              energia química (armazenada em moléculas de ATP - 36 ou 38
              moleculas (depende da celula) de ATP por moléculas de glicose),
              gás carbônico e água.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <Text
          style={styles.externaLink}
          onPress={() =>
            Linking.openURL('https://pt.wikipedia.org/wiki/Glicose')
          }>
          Fonte das informações: Wikipédia
        </Text>
      </View>
    </View>
  );
};

export default AboutInsulim;
