import React from 'react'
import { TouchableOpacity, Text } from 'react-native';

import * as S from './styles';
import ModalButton from '../../../../components/ModalButton';

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
      <ModalButton { ...{button} }/>
    </>
  )
}

export default Details