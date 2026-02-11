import React from "react";
import { useCart } from "../../context/CartContext";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalTitle,
  EmptyCart,
  CartItem,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemPrice,
  QuantityControls,
  QuantityButton,
  Quantity,
  RemoveButton,
  TotalSection,
  TotalRow,
  TotalLabel,
  TotalPrice,
  OrderButton,
} from "./CartModal.styled";

const CartModal = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    placeOrder,
    getTotalItems,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  const handleOrder = () => {
    alert("Дякуємо за замовлення! Ваше замовлення прийнято.");
    placeOrder();
    closeCart();
  };

  return (
    <ModalOverlay onClick={closeCart}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
        <ModalTitle>Your orders</ModalTitle>

        {cartItems.length === 0 ? (
          <EmptyCart>Your cart is empty.</EmptyCart>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemImage src={item.imageUrl} alt={item.name} />
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>
                    $
                    {item.price
                      ? (item.price * item.quantity).toFixed(2)
                      : "0.00"}
                  </ItemPrice>
                </ItemDetails>
                <QuantityControls>
                  <QuantityButton
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </QuantityButton>
                  <Quantity>{item.quantity}</Quantity>
                  <QuantityButton
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </QuantityButton>
                </QuantityControls>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  🗑️
                </RemoveButton>
              </CartItem>
            ))}

            <TotalSection>
              <TotalRow>
                <TotalLabel>Total products:</TotalLabel>
                <TotalLabel>{getTotalItems()}</TotalLabel>
              </TotalRow>
              <TotalRow>
                <TotalLabel>Total cost:</TotalLabel>
                <TotalPrice>${getTotalPrice().toFixed(2)}</TotalPrice>
              </TotalRow>
              <OrderButton onClick={handleOrder}>Order</OrderButton>
            </TotalSection>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default CartModal;
