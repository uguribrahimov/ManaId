import React from "react";
import toast, { Toaster } from "react-hot-toast";

const ToastNotification = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2000, 
        style: {
          background: "#363636",
          color: "#fff",
        },
        success: {
          style: {
            background: "#4caf50", 
          },
        },
        error: {
          style: {
            background: "#f44336", 
          },
        },
      }}
    />
  );
};

// Toast fonksiyonlarını dışa aktar
export const showToast = (message, type = "success") => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "loading":
      toast.loading(message);
      break;
    default:
      toast(message);
      break;
  }
};

export default ToastNotification;