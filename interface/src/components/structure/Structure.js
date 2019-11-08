import React from 'react'
import { Layout } from 'antd'
const { Header, Content } = Layout

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
