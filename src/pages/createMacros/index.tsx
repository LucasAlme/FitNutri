import { useState } from 'react';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import PickerGender from '../../components/PickerGender';
import {
  Content,
  DescriptionOption,
  MainContainer,
  Title,
  Container,
  DescriptionContainer,
  SubTitle,
  StepContainer,
} from './styles';

export default function CreateMacros() {
  const [step, setStep] = useState(1);
  const [isInActivity, setIsInActivity] = useState(false);

  const handleSedentary = () => {
    setIsInActivity(false);
    setStep(2);
  };

  const handleActivity = () => {
    setIsInActivity(true);
    setStep(2);
  };
  return (
    <MainContainer>
      <StatusBar backgroundColor=" #181818" barStyle={'light-content'} />
      <Container>
        <Title>
          Para montar sua dieta vocé precisará adicionar algumas informações
          sobre seu perfil corporal
        </Title>
        <Title>Escolha a opção abaixo no qual mais definida seu perfil</Title>
        <SubTitle>
          Vamos avaliar a melhor forma de montar uma dieta adequada de acordo
          seus hábitos e perfil
        </SubTitle>
      </Container>

      {step === 1 && (
        <StepContainer>
          <Content>
            <Button
              title="Sedentario "
              onPress={() => handleSedentary()}
              color={'#FFD700'}
              width="45%"
            />

            <Button
              title="Em atividade"
              onPress={() => handleActivity()}
              color={'#FFD700'}
              width="45%"
            />
          </Content>
          <Content>
            <DescriptionOption>
              Se você ainda está iniciando ou não iniciou na musculação e
              gostaria de fazer sua dieta (escolha essa opção)
            </DescriptionOption>
            <DescriptionOption>
              Se você já está um tempo na musculação e ve ganhos de massa
              muscular (escolha essa opção)
            </DescriptionOption>
          </Content>
        </StepContainer>
      )}

      {step === 2 && (
        <StepContainer>
          <PickerGender />
        </StepContainer>
      )}
    </MainContainer>
  );
}
