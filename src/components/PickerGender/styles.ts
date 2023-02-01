import styled from 'styled-components/native';

export const PickerInputContainer = styled.View`
  flex-direction: column;
  background-color: transparent;
`;

export const PickerInput = styled.View`
  height: 42px;
  width: 100%;
`;

export const PickerInputTouch = styled.TouchableOpacity`
  flex: 1;
  padding: 8px 10px;
  border-color: #ffd700;
  border-width: 1px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const PickerInputText = styled.Text`
  font-size: 16px;
  color: #ffd700;
  padding-top: 2px;
`;

export const ListItem = styled.TouchableOpacity`
  margin: 0px;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 20px;
  width: 100%;
`;

export const ListItemRow = styled.View`
  border-color: #ffd700;
  border-bottom-width: 1px;
`;

export const ListItemText = styled.Text`
  font-size: 17px;
  color: #ffd700;
  padding-top: 3px;
`;
