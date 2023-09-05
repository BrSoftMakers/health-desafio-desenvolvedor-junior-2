import React from "react";
import HomeImage from "../../assets/images/home.png";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
import {
  Card,
  ImageWrapper,
  ContentContainer,
  ActionDescription,
  Title,
  TitleContainer,
  Page,
  Image,
  ActionDescriptionText,
  Options,
} from "./styles";

export default function Home() {
  return (
    <Page>
      <Card>
        <ContentContainer>
          <TitleContainer>
            <Title>Bem vindo ao</Title>
            <Title color="#130602"> JumaShop</Title>
          </TitleContainer>
          <ActionDescription>
            <ActionDescriptionText>
              Escolha uma opção para prosseguir:
            </ActionDescriptionText>
          </ActionDescription>

          <Options>
            <Link to="/register">
              <Button
                text="Cadastrar pet"
                color="#e7b9c8"
              />
            </Link>
            <Link to="/pets">
              <Button
                text="Listar pets"
                color="#F2CA87"
              />
            </Link>
          </Options>
        </ContentContainer>

        <ImageWrapper>
          <Image
            src={HomeImage}
            alt="ilustração de uma mulher tirando foto com seu cachorro"
          />
        </ImageWrapper>
      </Card>
    </Page>
  );
}
