import tw, { styled } from "twin.macro";
import { backgroundColorSelector, TypeForBackground } from "../../utils/backgroundColorSelector";

export const Container = styled.div(({ type }: { type: TypeForBackground }) => [
  tw`
  w-96
  h-700
  mb-4
  ml-96
  block
  rounded-pok
  justify-center
  items-center
  px-3
  `,
  backgroundColorSelector[type],
]);

export const InfoContainer = tw.div`
h-64
`;

export const BasicInfo = tw.div`
flex
items-center
justify-between
`;

export const TypeAndNameContainer = tw.div`
ml-2.5
p-0.5
`;

export const IdContainer = tw.div`
mr-1.5
text-white
font-bold
text-2xl
`;

export const Name = tw.div`
capitalize
text-4xl
font-bold
text-white
text-center
`;

export const TypeContainer = tw.div`
flex
justify-around
`;

export const Type = styled.span(({ type }: { type: TypeForBackground }) => [
  tw`
  flex
  justify-around
  w-20
  m-1
  p-1
  rounded-3xl
  shadow
  `,
  backgroundColorSelector[type],
]);

export const Image = tw.img`
ml-12
mt-[-2.375rem]
w-80
h-80
z-50
`;

export const TopNav = tw.div`
  flex
  flex-row
  justify-between
  content-center
  p-1
  mx-12
  text-xl
  font-bold
`;

export const InfoTable = tw.div`
h-448
border-solid
border-t-0
border-r
border-l
border-b
border-borderGrey
rounded-3xl
mt-3.5
mx-[-12px]
bg-white
flex
flex-col
justify-start
`;

export const TableNavbar = tw.table`
  w-full
  h-12
  mt-12
  ml-4
  `;

export const TableRow = tw.tr`
  z-10
  `;

export const TableCell = tw.td`
  border-2
  border-black
  w-24
`;

export const Anchor = tw.a`
  no-underline
`;

export const BackArrow = tw.span`
  text-white
  `;
export const FavIcon = tw.span`
  text-white
  `;

export const ButtonTab = tw.button`
  border-0
  rounded-lg
  opacity-70
  text-black
  bg-transparent
  focus:bg-lightBorder
`;
