import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9e6b3;
  height: 100vh;

  header {
    background-color: #fff;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
  }

  .main_content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 300px;
    padding: 0 10px;
    gap: 15px;
  }

  .main_content > h1 > span {
    color: #175ea8;
  }

  .main_content > a {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;

    width: 150px;
    height: 50px;
    border-radius: 30px;
    margin-top: 10px;

    background-color: #175ea8;
    color: #fff;
    border-color: transparent;
  }

  main > img {
    margin-top: 10px;
    height: 30vh;
    width: 70vw;
  }

  @media (min-width: 768px) {
    main > img {
      margin-top: 30px;
      height: 40vh;
      width: 75vw;
    }

    .main_content {
      width: 600px;
    }
  }

  @media (min-width: 1024px) {
    main {
      flex-direction: row;
    }

    main > img {
      height: 42vh;
      width: 50vw;
    }

    .main_content {
      width: 50vh;
    }

    .main_content > h1 {
      font-size: 50px;
    }

    .main_content > p {
      font-size: 30px;
    }
    .main_content > a {
      font-size: 30px;
      width: 280px;
      height: 80px;
      border-radius: 40px;
    }
  }
`;
