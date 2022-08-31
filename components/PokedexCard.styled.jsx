import styled from "styled-components";
import backgroundColorSelector from "../utils/backgroundColorSelector";

export const CardContainer = styled.div`
  display: flex;
  background-color: ${({ type }) => backgroundColorSelector(type)};
  width: 17rem;
  height: 9rem;
  justify-content: space-between;
  border-radius: 30px;
  margin-bottom: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 15px;
`;

export const Name = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 25px;
  color: #ffffff;
  width: 100px;
`;

export const Type = styled.span`
  display: flex;
  border-radius: 25px;
  justify-content: center;
  background-color: ${({ type }) => backgroundColorSelector(type)};
  width: 70px;
  padding: 5px;
  margin: 3px 0;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 90.4px;
`;
export const Image = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 50px;
  right: 12px;
  width: 90.4px;
  height: 90.4px;
`;

export const MainImage = styled.img`
  position: absolute;
  top: 10px;
  right: -15px;
  height: 100%;
  z-index: 10;
`;
