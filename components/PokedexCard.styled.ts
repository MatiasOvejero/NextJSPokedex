import tw, { styled } from "twin.macro";
import { backgroundColorSelector, TypeForBackground } from "../utils/backgroundColorSelector";

// display: flex;
// background-color: ${({ type }) => backgroundColorSelector(type)};
// width: 17rem;
// height: 9rem;
// justify-content: space-between;
// border-radius: 30px;
// margin-bottom: 1rem;
// box-shadow: 3px 3px #b3adad33;
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

// tw`${({ type }) => backgroundColorSelector(type)}`,

/* display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin-left: 15px; */
export const InfoContainer = tw.div`
  flex
  flex-col
  items-start
  justify-center
  ml-3.5
`;

// text-transform: capitalize;
// font-weight: bold;
// font-size: 25px;
// color: #ffffff;
// width: 100px;
export const Name = tw.div`
  text-white
  capitalize
  font-bold
  text-2xl
  w-24
`;

// display: flex;
// border-radius: 25px;
// justify-content: center;
// background-color: ${({ type }) => backgroundColorSelector(type)};
// width: 70px;
// color: #ffffff;
// text-transform: capitalize;
// padding: 5px;
// margin: 3px 0;
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

// position: relative;
// width: 90.4px;
export const ImageContainer = tw.div`
  relative
  w-20
`;

// position: absolute;
// opacity: 0.1;
// top: 50px;
// right: 12px;
// width: 90.4px;
// height: 90.4px;
export const Image = tw.img`
  absolute
  opacity-10
  top-12
  right-3
  w-24
  h-24
`;

// position: absolute;
// top: 10px;
// right: -15px;
// height: 100%;
// z-index: 10;
export const MainImage = tw.img`
  absolute
  top-2.5
  -right-4
  h-full
  z-10
`;
