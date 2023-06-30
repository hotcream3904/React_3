import styled from 'styled-components';

function App() {
  return (
    <StContainer>
      {
      BoxList.map((boxColor)=>{
        return <StBox borderColor={boxColor}>{getBoxName(boxColor)}</StBox>
      })
      }
    </StContainer>
  );
}

const BoxList = ['red', 'blue', 'green', 'b'];

const getBoxName = (color) => {
  switch (color) {
    case 'red':
      return '빨간 박스';
    case 'green':
      return '초록 박스';
    case 'blue':
      return '파랑 박스';
    default:
      return '검정 박스';
  }
};

const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor}; //얘네가 지금 상속받고있음.
  margin: 20px;
`;

export default App;
