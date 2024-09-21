import React, { FC } from "react";
import { Alert } from "@mui/material";
import { BaseToast, ToastProps } from "./base-toast";

export const WarningToast: FC<ToastProps> = ({ closeToast, isVisible, text }) => {
   return (
      <BaseToast isVisible={isVisible} closeToast={closeToast}>
         <Alert onClose={() => closeToast()} severity="warning" variant="filled" sx={{ width: "100%" }}>
            {text}
         </Alert>
      </BaseToast>
   );
};
