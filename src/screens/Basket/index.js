import React from "react";

import { BasketDetails } from "./styles";
import { ScrollView } from "react-native";

import Top from "./components/Top";
import Details from "./components/Details";
import Items from './components/Items';

export default function Basket({ top, details, items }) {
  return (
    <ScrollView>
      <Top { ...top }/>

      <BasketDetails>
        <Details { ...details }/>
        <Items {...items}/>
      </BasketDetails>
    </ScrollView>
  )
}