import React from 'react'
import { Text, View, Image } from 'react-native';
import { Item, ItemName, ItemThumb, ItemTitle } from './styles';

function Items({title, list}) {
  return (
    <>
      <ItemTitle>{ title }</ItemTitle>
      {
        list.map(({ name, thumb }) =>
          <Item key={ name }>
            <ItemThumb source={ thumb } />
            <ItemName> { name } </ItemName>
          </Item>
        )
      }
    </>
  )
}

export default Items