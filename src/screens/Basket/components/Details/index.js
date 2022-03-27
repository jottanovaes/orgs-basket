import React from 'react'
import { TouchableOpacity, Text } from 'react-native';

import * as S from './styles';

function Details({ name, logo, farmName, description, price, button}) {
  return (
    <>
      <S.Name>{ name }</S.Name>
        <S.Farm>
          <S.Logo source={ logo } />
          <S.FarmName>{ farmName }</S.FarmName>
        </S.Farm>
        <S.Description>{ description }</S.Description>
        <S.Price>$ { price.toFixed(2) }</S.Price>

        <S.BuyButton>
          <S.ButtonText>
            { button }
          </S.ButtonText>
        </S.BuyButton>
    </>
  )
}

export default Details