import "twin.macro";
import styledImport, { css as cssImport } from "styled-components";
import { CSSProp } from "styled-components";

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

interface MyTheme {}

declare module "react" {
  interface Attributes {
    css?: CSSProp<MyTheme>;
  }
}
