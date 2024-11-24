import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../../../services/profile";
const useChangePassword = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm();
  const newPassword = watch("new_password");
  const handleChangePassword = async (data) => {
    // console.log(data);
    try {
      const res = await updatePassword(data);
      const json = await res.json();
      if (res.status === 200) {
        toast.success(`${json.message}  and login again please!`);
        reset();
        nav("/login");
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    newPassword,
    handleChangePassword,
  };
};
export default useChangePassword;
