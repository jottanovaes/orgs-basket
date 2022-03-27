import React from "react";

import { BasketDetails } from "./styles";

import Top from "./components/Top";
import Details from "./components/Details";

export default function Basket({ top, details }) {
  return (
    <>
      <Top { ...top }/>

      <BasketDetails>
        <Details { ...details }/>
      </BasketDetails>
    </>
  )
}