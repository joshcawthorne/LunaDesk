import { ToastContainer, toast, Slide } from "react-toastify";

function DisplayToast(message) {
  toast(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    hideProgressBar: true,
    transition: Slide,
    style: {
      zIndex: 100000000,
      cursor: "unset",
    },
  });
}

function DisplaySuccessToast(message) {
  toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    hideProgressBar: true,
    transition: Slide,
    style: {
      zIndex: 100000000,
      cursor: "unset",
    },
  });
}

export { DisplayToast, DisplaySuccessToast };
