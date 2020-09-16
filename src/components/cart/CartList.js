import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import CartItem from "./CartItem";
import styled from "styled-components";

export default function CartList() {
  const { cart } = useContext(CartContext);
  console.log({ cart });
  return (
    <Container className="container">
      {cart.map(item => {
        return <CartItem data={item} />;
      })}
    </Container>
  );
}

const Container = styled.div``;
