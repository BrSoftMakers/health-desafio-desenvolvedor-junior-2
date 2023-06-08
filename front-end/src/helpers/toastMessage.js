import { toast } from 'react-toastify';

const toastMessage = (message, type = 'sucess') => {
  toast?.[type](message, {
    position: toast.POSITION.TOP_RIGHT,
    closeButton: true,
    autoClose: 3000,
    pauseOnHover: false,
    theme: 'colored',
  });
};

export default toastMessage;
