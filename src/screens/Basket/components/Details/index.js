import React from 'react'

import * as S from './styles';

function Details({ name, logo, farmName, description, price}) {
  return (
    <>
      <S.Name>{ name }</S.Name>
        <S.Farm>
          <S.Logo source={ logo } />
          <S.FarmName>{ farmName }</S.FarmName>
        </S.Farm>
        <S.Description>{ description }</S.Description>
        <S.Price>$ { price.toFixed(2) }</S.Price>
    </>
  )
}

export default Details