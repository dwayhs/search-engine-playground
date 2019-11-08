import React from 'react'
import styled from 'styled-components'
import Manager from '../components/structure/Manager'
import Explorer from '../components/structure/Explorer'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  height: 100%;
  width: 100%;
`

export default (props) => {
  return (
    <Container>
      <Manager />
      <Explorer />
    </Container>
    
  )
}
