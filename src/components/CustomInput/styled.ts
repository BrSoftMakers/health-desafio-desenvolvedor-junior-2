import styled from 'styled-components';
import Colors from '../../styles/theme';

type ICustomInputContainerProps = {
  hasError?: boolean
}

export const CustomInputContainer = styled.input<ICustomInputContainerProps>`
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



  border: ${(props) => (props.hasError ? `2px solid ${Colors.error}` : 'none')};
  &::placeholder {
    color: ${(props) =>
    props.hasError ? Colors.error : Colors.input.placeholder};
  }
  &:focus {
    outline: ${(props) =>
    props.hasError ? 'none' : `2px solid ${Colors.input.placeholder}`};
  }
`;
