import React from 'react';
import {View} from 'react-native';
import Dialog from 'react-native-dialog';

const DialogComponent = (props) => {
  return (
    <View>
      <Dialog.Container visible={props.isVisible}>
        <Dialog.Title>{props.Title}</Dialog.Title>
        <Dialog.Description>{props.Description}</Dialog.Description>
        <Dialog.Button
          label="Cancelar"
          onPress={() => props.onClick1(props.label1)}
        />
        <Dialog.Button
          label="Deletar"
          onPress={() => props.onClick2(props.label2)}
        />
      </Dialog.Container>
    </View>
  );
};

export default DialogComponent;
