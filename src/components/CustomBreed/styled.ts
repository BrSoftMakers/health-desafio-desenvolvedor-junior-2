import styled from 'styled-components';
import Colors from '../../styles/theme';

export const CustomSelectContainer = styled.select`
  border: none;
  width: 100%;
  background-color: ${Colors.input.background};
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  color: ${Colors.text.dark};
`;
