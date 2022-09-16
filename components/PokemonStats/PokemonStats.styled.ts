import tw, { styled } from "twin.macro";

export const StatScreen = tw.div`
  h-full
  pl-3
  flex
  flex-col
  justify-around
`;

export const StatContainer = tw.div`
  flex
`;

export const BarContainer = tw.div`
  w-96
  h-2.5
  border-0
  rounded-xl
  p-1
`;

export const BarProgress = tw.span`
  block
  bg-black
  w-6/12
  h-full
  rounded-xl
`;
