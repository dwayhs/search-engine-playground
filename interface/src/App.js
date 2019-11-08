import React from 'react'
import Structure from './components/structure/Structure'
import Playground from './pages/Playground'
import './App.css'
import 'antd/dist/antd.css'

export default () => {
  return (
    <Structure>
      <Playground />
    </Structure>
  )
}
