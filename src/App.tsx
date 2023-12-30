import React from 'react';
import styled from "styled-components";
import {StyledBtn, SuperBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {theme} from "./styles/Theme.styled";


function App() {
    return (
        <div>
            <Menu>
                <ul>
                    <li><a href="">Item1</a></li>
                    <li><a href="">Item2</a></li>
                    <li><a href="">Item3</a></li>
                </ul>
            </Menu>

            <Box>

                <StyledBtn btntype={'primary'} active>Red</StyledBtn>
                <StyledBtn btntype={'outlined'} >Green</StyledBtn>


            </Box>

        </div>
    );
}

export default App;



const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button {
    cursor: pointer;
  }
  
  ${Link} {
    cursor: zoom-in;
  }
  
  @media ${theme.media.tablet} {
    flex-direction: column;
  }
`

