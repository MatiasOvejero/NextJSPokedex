import tw, { styled } from "twin.macro";
import { backgroundColorSelector, TypeForBackground } from "../../utils/backgroundColorSelector";

export const CardContainer = styled.div(({ type }: { type: TypeForBackground }) => [
  tw`flex
  w-64
  h-36
  justify-between
  rounded-3xl
  mb-4
  shadow`,
  backgroundColorSelector[type],
]);

export const InfoContainer = tw.div`
  flex
  flex-col
  items-start
  justify-center
  ml-3.5
`;

export const Name = tw.div`
  text-white
  capitalize
  font-bold
  text-2xl
  w-24
`;

export const Type = styled.span(({ type }: { type: TypeForBackground }) => [
  tw`
  text-white
  flex
  rounded-3xl
  justify-center
  w-16
  capitalize
  p-1
  my-0.5
  shadow
  `,
  backgroundColorSelector[type],
]);

export const ImageContainer = tw.div`
  relative
  w-20
`;

export const Image = tw.img`
  absolute
  opacity-10
  top-12
  right-3
  w-24
  h-24
`;

export const MainImage = tw.img`
  absolute
  top-2.5
  -right-4
  h-full
  z-10
`;
