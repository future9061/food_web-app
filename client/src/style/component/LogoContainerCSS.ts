import styled from "styled-components";

export const LogoContainerCSS = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 30px;
  z-index: 1;
  align-items: center;

  .cloud2 {
    position: relative;
    z-index: -1;
    width: 100px;
    height: 85px;
    background-color: #fff;
    border-radius: 50%;

    &::before,
    &::after {
      content: "";
      position: absolute;
      background-color: #fff;
      border-radius: 50%;
    }

    &::before {
      width: 60px;
      height: 60px;
      bottom: 50%;
      left: 30%;
    }

    &::after {
      width: 200px;
      height: 120px;
      top: -24%;
      left: 25%;
    }
  }
  > p {
    position: relative;
    z-index: 1;
    font-family: "Cafe24Supermagic-Bold-v1.0";
    font-size: 1.5em;
    transform: translateY(50px);
    text-wrap: nowrap;
    .cloud {
      z-index: -1;
      position: relative;
      width: 200px;
      height: 100px;
      background-color: #fff;
      border-radius: 50%;

      &::before,
      &::after {
        content: "";
        position: absolute;
        background-color: #fff;
        border-radius: 50%;
      }

      &::before {
        width: 60px;
        height: 60px;
        bottom: 50%;
        left: 40px;
      }

      &::after {
        width: 120px;
        height: 120px;
        top: -20px;
        left: 80px;
      }
    }
    > span {
      font-size: 2rem;
    }
  }
`;
