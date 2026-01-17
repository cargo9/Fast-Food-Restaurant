import styled from "styled-components";

export const PromoContainer = styled.section`
  padding: 60px 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const PromoTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
  margin: 20px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const PromoImage = styled.img`
  width: 100%;
  max-width: 900px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
`;

export const PromoWrapper = styled.div`
  max-width: 800px;
  text-align: center;
`;

// export const PromoTitle = styled.h2`
//   font-size: 2rem;
//   color: #e63946;
//   margin-bottom: 20px;
// `;

export const PromoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 15px;
  text-align: justify;
`;
