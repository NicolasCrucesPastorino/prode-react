import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SuccessToast = () => (
  <ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={true}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
);

export const showToast = (message = "success") => {
  toast.success(message);
};

export default SuccessToast;
