import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { MainContainer, Title } from './styles';

interface ButtonProps {
  title: string;
  width?: string;
  style?: StyleProp<ViewStyle>;
  color?: string;
  backgroundColor?: string;
  titleStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

export function Button({
  title,
  color,
  backgroundColor,
  width,
  style,
  titleStyle,
  onPress,
}: ButtonProps) {
  return (
    <MainContainer
      width={width}
      style={[style, { backgroundColor, borderColor: color }]}
      onPress={onPress}
    >
      <Title style={[titleStyle, { color }]}>{title}</Title>
    </MainContainer>
  );
}
