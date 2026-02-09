import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  transition: color 0.3s ease;
  line-height: 1;
  padding: 5px;

  &:hover {
    color: #e63946;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-size: 1.1rem;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
  border-bottom: 1px solid #eee;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const ItemName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;
`;

export const ItemPrice = styled.p`
  color: #e63946;
  font-weight: 600;
  font-size: 1rem;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #e63946;
    color: white;
    border-color: #e63946;
  }
`;

export const Quantity = styled.span`
  font-size: 1rem;
  font-weight: 600;
  min-width: 30px;
  text-align: center;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 5px;
  transition: color 0.3s ease;

  &:hover {
    color: #e63946;
  }
`;

export const TotalSection = styled.div`
  margin-top: 25px;
  padding-top: 20px;
  border-top: 2px solid #eee;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const TotalLabel = styled.span`
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
`;

export const TotalPrice = styled.span`
  font-size: 1.5rem;
  color: #e63946;
  font-weight: 700;
`;

export const OrderButton = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #e63946 0%, #f77f00 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(230, 57, 70, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(230, 57, 70, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;
