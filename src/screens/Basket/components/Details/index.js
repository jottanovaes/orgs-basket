import React from 'react'

import * as S from './styles';
import farm from '../../../../../assets/logo.png';

function Details() {
  return (
    <>
      <S.Name>Vegetables Basket</S.Name>
        <S.Farm>
          <S.Logo source={farm} />
          <S.FarmName>Jenny Jack Farm</S.FarmName>
        </S.Farm>
        <S.Description>A hand carefully picked basket products from farm directly to your kitchen</S.Description>
        <S.Price>$ 40.00</S.Price>
    </>
  )
}

export default Details