import styled from "styled-components";

export const LogoCSS = styled.div`
font-family: "Cafe24Supermagic-Bold-v1.0";
  background: #ffaaa8 url(${process.env.PUBLIC_URL}img/background_img.webp)
    no-repeat;
  color: #fff;
  cursor: pointer;
  width: 10rem;
  height: 10rem;
  padding: 2rem;
  border-radius: 50%;
  text-align: center;
  text-wrap: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  > p {
    font-size: 2rem;
    > span {
      font-size: 1rrem;
    }
  }

  }
`;
