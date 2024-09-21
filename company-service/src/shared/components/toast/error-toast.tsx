import React, { FC } from "react";
import { Alert } from "@mui/material";
import { BaseToast, ToastProps } from "./base-toast";

export const ErrorToast: FC<ToastProps> = ({ closeToast, isVisible, text }) => {
   return (
      <BaseToast isVisible={isVisible} closeToast={closeToast}>
         <Alert onClose={() => closeToast()} severity="error" variant="filled" sx={{ width: "100%" }}>
            {text}
         </Alert>
      </BaseToast>
   );
};
