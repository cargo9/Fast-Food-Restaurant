import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  background-color: #f0f8ff;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 4px;
    background-color: #e63946;
    margin: 15px auto 0;
    border-radius: 2px;
  }
`;

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;


