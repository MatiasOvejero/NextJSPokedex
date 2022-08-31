import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 700px;
  display: block;
  border: 1px solid rgb(252, 240, 240);
  border-radius: 25px;
  box-shadow: 1px 0.5px rgb(252, 240, 240);
  margin: 1rem;
  justify-content: center;
  align-items: center;
  background-color: hsl(166deg 58% 55%);
`;

export const InfoContainer = styled.div`
  height: 250px;
`;
export const BasicInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TypeAndNameContainer = styled.div`
  margin-left: 10px;
  padding: 2px;
`;

export const IdContainer = styled.div`
  margin-right: 5px;
  color: #ffffff;
  font-weight: bold;
  font-size: 25px;
`;

export const Name = styled.div`
  text-transform: capitalize;
  font-size: 35px;
  font-weight: bold;
  color: #ffffff;
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Type = styled.span`
  display: flex;
  justify-content: space-around;
  border-radius: 25px;
  background-color: green;
  width: 70px;
  padding: 5px;
`;

export const Image = styled.img`
  margin-left: 50px;
  margin-top: 10px;
  width: 300px;
  height: 300px;
`;

export const Table = styled.div`
  height: 448px;
  border-radius: 25px;
  border-top: solid 1px #ffffff;
  background-color: #ffffff;
`;
