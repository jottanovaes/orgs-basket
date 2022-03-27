import React from "react";

import { BasketDetails, ItemTitle } from "./styles";
import { FlatList } from "react-native";

import Top from "./components/Top";
import Details from "./components/Details";
import Item from './components/Item';

export default function Basket({ top, details, items }) {
  return (
       <FlatList
        data={ items.list }
        renderItem={ Item }
        keyExtractor={ ({ name }) => name }
        ListHeaderComponent={ () => (
          <>
            <Top { ...top }/>
            <BasketDetails>
              <Details { ...details }/>
              <ItemTitle>{ items.title }</ItemTitle>
            </BasketDetails>
          </>
         ) }
      />
  )
}