import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";
import {theme} from "../styles/Theme.styled";


type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btntype?: "outlined" | "primary"
    active?: boolean
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
  //border: none;

  padding: 10px 20px;

  //font-size: 1rem;
  font-size: ${props => props.fontSize};
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    background-color: ${theme.colors.grey.light};
    color: ${theme.colors.primaryColor};
  }

  ${props => props.btntype === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || theme.colors.primaryColor};
    color: ${props => props.color || theme.colors.secondaryColor};
    background-color: transparent;

    &:hover {
      background-color: ${props => props.color || theme.colors.primaryColor};
      color: ${theme.colors.grey.light};
      transition: 1s;
    }
  `}

  ${props => props.btntype === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || theme.colors.primaryColor};
    color: ${theme.colors.grey.light};

    &:hover {
      border: 2px solid ${props => props.color || theme.colors.primaryColor};
      background-color: transparent;
      color: ${theme.colors.grey.dark};
      transition: 1s;
    }

  `}

  ${props => props.active && css<StyledBtnPropsType>`

    box-shadow: 0 0 5px 5px ${theme.colors.grey.light};

  `}

  transition: 1s;
  //&:last-child {
  //  background-color: chartreuse;
  //}
`

export const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: bisque;
  color: ${theme.colors.secondaryColor};

  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`