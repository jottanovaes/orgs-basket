import React from 'react'
import { Thumb, Title } from './styles'

import top from '../../../../../assets/top.png';

function Top({ title }) {
  return (
    <>
      <Thumb source={top}/>
      <Title>{ title }</Title>
    </>
  )
}

export default Top