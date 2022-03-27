import React from "react";

import { BasketDetails } from "./styles";

import Top from "./components/Top";
import Details from "./components/Details";

export default function Basket() {
  return (
    <>
      <Top />

      <BasketDetails>
        <Details />
      </BasketDetails>
    </>
  )
}