import React from 'react'
import styled from "styled-components"

function TestPage(props) {
  return (
    <Wrapper>
        <Title>{props.title}</Title>
        <Contents>{props.contents}</Contents>
    </Wrapper>
  )
}

//지역스타일링

const Wrapper = styled.div`
    border: 1px solid pink;
    width: 500px;
    height: 500px;
`

const Title = styled.h1`
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 8px;
`

const Contents = styled.p`
    margin: 0;
`

export default TestPage