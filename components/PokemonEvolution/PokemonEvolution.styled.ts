import tw from "twin.macro";

export const EvolutionContainer = tw.div`
w-full
h-full
mt-2.5
bg-greenPrimary/[.1]
`;

export const EvolutionCard = tw.div`
  w-full
  h-1/3
  rounded
  flex
  flex-col
  flex-wrap
  justify-evenly
  items-start
`;

export const EvolutionName = tw.span`
  w-36
  h-9
  text-xl
  capitalize
  font-sans
  p-1
`;

export const EvolutionText = tw.span`
  h-auto
  w-72
  font-sans
  p-1
`;

export const EvolutionImage = tw.img`
  w-20
  h-20
  p-1
`;
