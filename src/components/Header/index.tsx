import { StatusBar } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Content, MainContainer, Title } from './styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const { top } = useSafeAreaInsets();

  return (
    <MainContainer style={{ paddingTop: top }}>
      <Content>
        <StatusBar barStyle={'dark-content'} backgroundColor="#ffd700" />

        <Title>{title}</Title>
      </Content>
    </MainContainer>
  );
}
