import React from "react";

import top from '../../../assets/top.png';
import * as S from "./style";
import farm from '../../../assets/logo.png';

export default function Basket() {
  return (
    <>
      <S.Thumb source={top}/>
      <S.Title>Basket details</S.Title>

      <S.BasketDetails>
          <S.Name>Vegetables Basket</S.Name>
        <S.Farm>
          <S.Logo source={farm} />
          <S.FarmName>Jenny Jack Farm</S.FarmName>
        </S.Farm>
        <S.Description>A hand carefully picked basket products from farm directly to your kitchen</S.Description>
        <S.Price>$ 40.00</S.Price>
      </S.BasketDetails>
    </>
  )
}