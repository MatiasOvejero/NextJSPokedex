import tw, { styled } from "twin.macro";

export const AboutTable = tw.table`
  w-full
  h-full
  mt-2.5
`;

// width: 100%;
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//     justify-content: space-around;
export const AboutContainer = tw.tbody`
  w-full
  h-80
  flex
  flex-col
  justify-evenly
`;

export const DataContainer = tw.td`
  mr-32
  flex
  justify-evenly
`;

export const InfoName = tw.td`
  w-40
  text-textGrey
`;

export const DatabaseData = tw.td`
  font-bold
`;
