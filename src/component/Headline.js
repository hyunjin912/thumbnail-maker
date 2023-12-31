import styled from "styled-components";

function Headline() {
  
  return (
    <Wrap>
      <Title>
        <span>
          thumbnail
          <br />
          maker
        </span>
        <br />
        with
        <br />
        unsplash api
      </Title>
      <Description>
        이 웹사이트는 Unsplash API를 이용하고 있습니다.
        <br />
        이미지와 텍스트를 이용하여 자신만의 커스텀 썸네일을 만들어 보세요.
      </Description>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  padding: 40px 0 20px;
  text-transform: uppercase;
  font-size: 80px;
  font-weight: bold;
  line-height: 1;

  span {
    color: #fdc000;
  }

  @media (max-width: 768px) {
    padding: 20px 0 10px;
    font-size: 45px;
  }
`;

const Description = styled.p`
  font-size: 24px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 1.3;
  }
`;

export default Headline;
