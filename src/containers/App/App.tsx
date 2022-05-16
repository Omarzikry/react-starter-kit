import styled from 'styled-components';
import { Title } from '../../components/Title/Title';

const SApp = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const App = () => {
  return (
    <SApp>
      <Title />
    </SApp>
  );
};
