//초기 상태값(state)
const initialState = {
  number: 0,
};

//리듀서 : state에 변화를 일으키는 함수(라고일단이해) (1)state 를 action의 type에 따라 변경하는 함수
//input : state와 action

const counter = (state = initialState, action) => {
  switch ((action, type)) {
    default:
      return state;
  }
};

export default counter;
