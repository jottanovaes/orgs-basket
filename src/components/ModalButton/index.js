import React from 'react';
import { ButtonText, BuyButton } from './styles';

function ModalButton({ button }) {
  return (
    <BuyButton>
      <ButtonText>
        { button }
      </ButtonText>
    </BuyButton>
  )
}

export default ModalButton