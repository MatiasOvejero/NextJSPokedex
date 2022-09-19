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
  w-36
  h-2
  border-0
  rounded-xl
  p-1
`;

export interface BarProgress {
  barWidth: number;
}

export const HpBarProgress = styled.span(({ barWidth }: BarProgress) => [
  tw`
  bg-green-700
  block
  h-full
  rounded-xl
  `,
  `width : ${barWidth}%`,
]);

export const AttackBarProgress = styled.span(({ barWidth }: BarProgress) => [
  tw`
  bg-red-400
  block
  h-full
  rounded-xl
  `,
  `width : ${barWidth}%`,
]);

export const DefenseBarProgress = styled.span(({ barWidth }: BarProgress) => [
  tw`
  bg-blue-300
  block
  h-full
  rounded-xl
  `,
  `width : ${barWidth}%`,
]);

export const SpeedBarProgress = styled.span(({ barWidth }: BarProgress) => [
  tw`
  bg-yellow-300
  block
  h-full
  rounded-xl
  `,
  `width : ${barWidth}%`,
]);

export const SABarProgress = styled.span(({ barWidth }: BarProgress) => [
  tw`
  bg-red-900
  block
  h-full
  rounded-xl
  `,
  `width : ${barWidth}%`,
]);

export const SDBarProgress = styled.span(({ barWidth }: BarProgress) => [
  tw`
  bg-blue-900
  block
  h-full
  rounded-xl
  `,
  `width : ${barWidth}%`,
]);

// export const SDBarProgress = styled.span(({ barWidth }: BarProgress) => [
//   tw`
//   bg-blue-900
//   block
//   h-full
//   rounded-xl
//   `,
//   `width : ${barWidth}%`,
// ]);
