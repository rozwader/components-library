import { styled } from "styled-components";
import { theme } from "../../theme.js";

export const ModalBackground = styled.div<{zIndex?: number}>`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);

    z-index: ${({zIndex}) => zIndex ? zIndex : 1000};
`

export const ModalComponent = styled.div<{zIndex?: number}>`
    z-index: ${({zIndex}) => zIndex ? zIndex+1 : 1001};

    display: flex;
    flex-direction: column;

    padding: 16px;
    border-radius: 8px;
    max-width: 50%;

    background-color: ${theme.colors.main};
    box-shadow: 0px 5px 5px -2px ${theme.colors.lightGray};
`

export const ModalTitle = styled.h1`
    margin: 0;
`

export const ModalButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
`

export const ModalErrorMessage = styled.p`
    color: red;
    margin-bottom: 0;
`