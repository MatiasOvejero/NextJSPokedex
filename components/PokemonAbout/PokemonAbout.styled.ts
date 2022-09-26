import tw, { styled } from "twin.macro";

export const AboutTable = tw.table`
  w-full
  h-full
  mt-2.5
`;

export const AboutContainer = tw.tbody`
  w-full
  h-80
  flex
  flex-col
  justify-evenly
`;

export const DataContainer = tw.tr`
  mr-32
  flex
  justify-evenly
`;

export const InfoName = tw.td`
  w-40
  text-greySecondary
`;

export const DatabaseData = tw.td`
  font-bold
`;
