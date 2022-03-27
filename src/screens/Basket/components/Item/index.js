import React from 'react'
import { ItemCard, ItemName, ItemThumb } from './styles';

function Item({ item: { name, thumb } }) {
  return (
    <ItemCard>
      <ItemThumb source={ thumb } />
      <ItemName> { name } </ItemName>
    </ItemCard>
  );
}

export default Item