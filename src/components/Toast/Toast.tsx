import { Check, Close, Dangerous, Info, Warning } from "@mui/icons-material";
import { ToastCloseButton, ToastContent, ToastIcon, ToastListContainer, ToastParentContainer, ToastTimer, ToastWrapper } from "./styles.js";
import type { ToastContainerProps, ToastProps } from "./types.js";
import React from 'react';

const ICON_DEFAULT_SIZE = "16px";

export const ToastContainer = ({
    $position = "right-top",
    toasts,
    deleteToast,
    id
}: ToastContainerProps) => {
    return(
        <ToastParentContainer>
            <ToastListContainer pos={$position} id={id}>
                {toasts.map((toast) => {
                    return <Toast {...toast} key={toast.id} DELETE_TOAST={deleteToast} />
                })}
            </ToastListContainer>
        </ToastParentContainer>
    )
}

export const Toast = ({
    id,
    children,
    title = undefined,
    $variant = "default",
    toastExpirationTimeMs = 10000,
    DELETE_TOAST
}: ToastProps) => {

    const getToastIcon = () => {
        switch($variant){
            case "danger":
                return <Dangerous style={{width: ICON_DEFAULT_SIZE, height: ICON_DEFAULT_SIZE}} />
            case "success":
                return <Check style={{width: ICON_DEFAULT_SIZE, height: ICON_DEFAULT_SIZE}} />
            case "info":
                return <Info style={{width: ICON_DEFAULT_SIZE, height: ICON_DEFAULT_SIZE}} />
            default:
                return <Warning style={{width: ICON_DEFAULT_SIZE, height: ICON_DEFAULT_SIZE}} />
        }
    }

    return(
        <ToastWrapper>
            <ToastContent>
                <ToastIcon variant={$variant}>
                    {getToastIcon()}
                </ToastIcon>
                {children}
                <ToastCloseButton onClick={() => DELETE_TOAST && DELETE_TOAST(id)}>
                    <Close style={{width: "20px", height: "20px"}} />
                </ToastCloseButton>
            </ToastContent>
            <ToastTimer time={toastExpirationTimeMs} />
        </ToastWrapper>
    )
}