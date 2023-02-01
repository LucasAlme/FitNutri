import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Description, MainContainer, Title, Content } from './styles';

export default function Home() {
  const navigation = useNavigation();
  return (
    <MainContainer>
      <StatusBar backgroundColor=" #181818" barStyle={'light-content'} />
      <Content>
        <Title>Seja bem vindo(a) ao FitNutri</Title>
        <Description>
          O aplicativo que o transformará em seu proprio nutricionista!
        </Description>
        <Title>Perfeito para...</Title>
        <Description>
          Montar uma dieta adequada e calcular seus macros nutrientes para se
          manter em forma, pensando como um verdadeiro nutricionista.
        </Description>

        <Button
          title="Seja você o nutricionista"
          width="60%"
          titleStyle={{ fontSize: 16 }}
          style={{ alignSelf: 'center' }}
          color={'#FFD700'}
          onPress={() => navigation.navigate('CreateMacros')}
        />
      </Content>
    </MainContainer>
  );
}
