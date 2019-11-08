import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`

const Header = styled.div`
  height: 60px;
  background-color: #001529;
`

const Content = styled.div`
  flex-grow: 1;
  position: relative;
`

export default (props) => {
  return (
    <Layout>
      <Header></Header>
      <Content>
        { props.children }
      </Content>
    </Layout>
  )
}
