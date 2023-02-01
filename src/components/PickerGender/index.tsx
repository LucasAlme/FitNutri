import React, { useState } from 'react';
import { View, Modal, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from '../Header';

import {
  ListItem,
  ListItemRow,
  ListItemText,
  PickerInput,
  PickerInputContainer,
  PickerInputText,
  PickerInputTouch,
} from './styles';

interface Gender {
  id?: number;
  label: string;
  value: string;
  valid?: boolean;
}

function PickerGender() {
  const [selectedLabel, setSelectedLabel] = useState('Masculino');
  const [selectedValue, setSelectedValue] = useState('');
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!visible);
  };
  const setGender = (genderValue: string) => {
    switch (genderValue) {
      case 'M':
        setSelectedLabel('Masculino');
        setSelectedValue('M');
        break;
      case 'F':
        setSelectedLabel('Feminino');
        setSelectedValue('F');
        break;
      case 'I':
        setSelectedLabel('Outro');
        setSelectedValue('I');
        break;
      default:
        setSelectedLabel('Outro');
        setSelectedValue('I');
        break;
    }
  };

  const listItem = (item: Gender) => {
    return (
      <ListItemRow key={item.id}>
        <ListItem onPress={() => {}}>
          <View>
            <ListItemText>{item.label}</ListItemText>
          </View>
          <View>
            <Icon name="check-circle" size={28} />
          </View>
        </ListItem>
      </ListItemRow>
    );
  };

  const renderList = () => {
    const data = [
      { id: 1, label: 'Feminino', value: 'F' },
      { id: 2, label: 'Masculino', value: 'M' },
    ];

    return data.map((item) => {
      return listItem(item);
    });
  };

  const modalGender = () => {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => toggleModal()}
        style={{ backgroundColor: ' #181818' }}
        statusBarTranslucent
      >
        <StatusBar barStyle={'dark-content'} backgroundColor="#ffd700" />

        <Header title="Gênero" />

        <View style={{ backgroundColor: ' #181818' }}>{renderList()}</View>
      </Modal>
    );
  };

  return (
    <PickerInputContainer>
      <PickerInput>
        <PickerInputTouch onPress={() => toggleModal()}>
          <PickerInputText>{selectedLabel}</PickerInputText>
          <Icon name="chevron-down" size={25} color="#ffd700" />
        </PickerInputTouch>
      </PickerInput>
      {modalGender()}
    </PickerInputContainer>
  );
}
export default PickerGender;
