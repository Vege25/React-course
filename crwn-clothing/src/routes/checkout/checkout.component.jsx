import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import {
  Total,
  HeaderBlock,
  CheckoutContainer,
  CheckoutHeader,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((checkoutItem) => (
        <CheckoutItem key={checkoutItem.id} checkoutItem={checkoutItem} />
      ))}
      <Total>Total: {cartPrice}€</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
