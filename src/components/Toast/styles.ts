import { keyframes, styled } from "styled-components";
import { theme } from "../../theme.js";
import type { ToastPos, ToastVariant } from "./types.js";

const getVariantIconStyles = (variant: ToastVariant) => {
    switch(variant){
        case "danger":
            return `
                background-color: ${theme.colors.danger};
            `
        case "success":
            return `
                background-color: ${theme.colors.success};
            `
        case "info":
            return `
                background-color: ${theme.colors.info};
            `
        default:
            return `
                background-color: ${theme.colors.secondary};
            `
    }
}

const getToastListPos = (pos: ToastPos) => {
    switch(pos){
        case "center-bottom":
            return `
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            `
        case "center-top":
            return `
                top: 0;
                left: 50%;
                transform: translateX(-50%);
            `
        case "right-top":
            return `
                top: 0;
                right: 0;
            `
        case "right-bottom":
            return `
                bottom: 0;
                right: 0;
            `
    }
}

export const ToastWrapper = styled.div`
    max-height: 50px;
    width: max-content;
    padding: 4px;
    margin: 8px;

    border: 1px solid ${theme.colors.lightGray};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;

    background-color: ${theme.colors.main};
`

export const ToastContent = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

export const ToastCloseButton = styled.button`
    padding: 0;
    margin: 0;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    color: ${theme.colors.dark};
    background-color: ${theme.colors.main};
`
export const ToastIcon = styled.div<{variant: ToastVariant}>`
    ${({variant}) => variant && getVariantIconStyles(variant)};

    width: 25px;
    height: 25px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.main};
`

export const ToastParentContainer = styled.div`
    width: 100%;
    height: 100%;

    position: sticky;
    pointer-events: none;
`

export const ToastListContainer = styled.div<{pos: ToastPos}>`
    position: absolute;
    ${({pos}) => pos && getToastListPos(pos)}

    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
`

const timerAnim = keyframes`
    0%{
        width: 100%;
    }
    100%{
        width: 0%;
    }
`

export const ToastTimer = styled.div<{time: number}>`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.lightGray};

    animation: ${({time}) => time && time+10}ms linear ${timerAnim};
`

