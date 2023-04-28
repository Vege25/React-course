import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  RemoveButton,
  Quantity,
  ImageContainer,
  Arrow,
  Value,
  BaseSpan,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;

  const { addItemToCart, deleteItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(checkoutItem);
  const addItemHandler = () => addItemToCart(checkoutItem);
  const deleteItemHandler = () => deleteItemFromCart(checkoutItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={deleteItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price} </BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
