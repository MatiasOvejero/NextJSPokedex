import tw, { styled } from "twin.macro";
import { backgroundColorSelector, TypeForBackground } from "../utils/backgroundColorSelector";

/* width: 400px;
height: 700px;
margin-bottom: 1rem;
margin-left: 25%;
display: block;
border: 1px solid rgb(252, 240, 240);
border-radius: 25px;
box-shadow: 4px 5px rgb(233 233 233 / 45%);
justify-content: center;
background-color: hsl(166deg 58% 55%);
align-items: center;
padding: 0.7rem; */
export const Container = styled.div(({ type }: { type: TypeForBackground }) => [
  tw`
  w-96
  h-700
  mb-4
  ml-96
  block
  border
  border-lightBorder
  rounded-pok
  shadow-pokShadow
  justify-center
  items-center
  px-3
  `,
  backgroundColorSelector[type],
]);

/* height: 250px; */
export const InfoContainer = tw.div`
h-64
`;

/* display: flex;
justify-content: space-between;
align-items: center; */
export const BasicInfo = tw.div`
flex
items-center
justify-between
`;

/* margin-left: 10px;
padding: 2px; */
export const TypeAndNameContainer = tw.div`
ml-2.5
p-0.5
`;

// margin-right: 5px;
// color: #ffffff;
// font-weight: bold;
// font-size: 25px;
export const IdContainer = tw.div`
mr-1.5
text-white
font-bold
text-2xl
`;

// text-transform: capitalize;
// font-size: 35px;
// font-weight: bold;
// color: #ffffff;
export const Name = tw.div`
capitalize
text-4xl
font-bold
text-white
text-center
`;

// display: flex;
// justify-content: space-around;
export const TypeContainer = tw.div`
flex
justify-around
`;

// display: flex;
// justify-content: space-around;
// border-radius: 25px;
// width: 70px;
// padding: 5px;
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

/* margin-left: 50px;
margin-top: 10px;
width: 300px;
height: 300px; */
export const Image = tw.img`
ml-12
mt-[-2.375rem]
w-80
h-80
z-50
`;

// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-content: center;
export const TopNav = tw.div`
  flex
  flex-row
  justify-between
  content-center
`;

/* height: 448px;
border-radius: 25px;
border-top: solid 1px #ffffff;
background-color: #ffffff;
margin: 14px -12px 0px -12px; */
export const InfoTable = tw.div`
h-448
border-t
border-white
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
