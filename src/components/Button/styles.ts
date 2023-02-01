import styled from 'styled-components/native';

interface MainContainerProps {
  width?: string;
}

export const MainContainer = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 10px;
  align-items: center;
  width: ${({ width }: MainContainerProps) => width || '100%'};
`;

export const Title = styled.Text`
  font-size: 14px;
  padding: 10px 10px;
`;
