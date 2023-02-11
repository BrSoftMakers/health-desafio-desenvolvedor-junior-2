import styled from 'styled-components';

export const Container = styled.header`
  margin: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentInfo = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ButtonCategory = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color[200]};
  border-radius: 48px;
  opacity: 0.9;
  box-shadow: 0 0 10px #999;
  transition: all .7s ease;

  &:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
  }

  button {
    margin-left: 20px;
    line-height: 0;
    border: none;
    background-color: ${({ theme }) => theme.color[1000]};
    padding: 5px;
    border-radius: 48px;
  }
`;

export const ContainerCard = styled.header`
  margin: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentInfoCard = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 420px;
  border: 1px solid ${({ theme }) => theme.color[200]};
  border-radius: 48px;
  opacity: 0.9;
  box-shadow: 0 0 10px #999;
  transition: all .7s ease;
  position: relative;

  img {
    width: 150px;
    height: 150px;
    border-radius: 48px;
  }

  &:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
  }
`;

export const InfoCard = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

export const EditCard = styled.button`
  line-height: 0;
  background-color: ${({ theme }) => theme.color[200]};
  border: none;
  position: absolute;
  padding: 15px;
  right: 0px;
  bottom: 0px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 48px;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const DeleteCard = styled.button`
  line-height: 0;
  background-color: ${({ theme }) => theme.color[1000]};
  border: none;
  position: absolute;
  padding: 15px;
  right: 0px;
  top: 0px;
  border-top-right-radius: 48px;
  border-bottom-left-radius: 10px;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    outline: 0;
    width: 100%;
    border: none;
    height: 50px;
    padding: 0 16px;
    border-radius: 25px;
    color: ${({ theme }) => theme.color[900]};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    background: ${({ theme }) => theme.color[200]};
    box-shadow: 0 0 10px #999;

    &::placeholder {
      color: ${({ theme }) => theme.color[900]};
    }
  }
`;

export const Small = styled.small`
  text-align: center;
  width: 200px;
  font-size: 16px;
`;
