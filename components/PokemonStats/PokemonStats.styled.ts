import tw from "twin.macro";

export const StatScreen = tw.div`
  h-full
  pl-3
  flex
  flex-col
  justify-around
`;

export const StatContainer = tw.div`
  flex
  justify-around
`;

export const StatName = tw.div`
  w-28
  text-greySecondary
  capitalize
`;

export const StatValue = tw.div`
  w-5
`;

export const BarContainer = tw.div`
  w-40
  h-2
  border-0
  rounded-xl
  p-1
`;

export const BarProgress = tw.span`
  block
  w-full
  h-full
  rounded-xl
`;

export const HP = tw(BarProgress)` bg-green-700`;
export const Attack = tw(BarProgress)` bg-red-400`;
export const Defense = tw(BarProgress)` bg-blue-300`;
export const SpecialAttack = tw(BarProgress)` bg-red-900`;
export const SpecialDefense = tw(BarProgress)` bg-blue-900`;
export const Speed = tw(BarProgress)`bg-yellow-300`;
