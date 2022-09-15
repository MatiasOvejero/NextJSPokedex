import tw, { styled } from "twin.macro";

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
