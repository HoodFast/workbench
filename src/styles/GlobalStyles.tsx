import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}body {
  background-color: ${theme.colors.grey.light};
 }

`