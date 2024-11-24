import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signUp } from "../../../services/auth";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm();
  const password = watch("password");

  const handleRegisterForm = async (data) => {
    console.log(data);
    try {
      const res = await signUp(data);
      const json = await res.json();
      console.log(json);
      if (res.status === 200) {
        toast.success(`${json.user.name} is registered successfully!`);
        reset();
        nav("/login");
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return {
    register,
    handleSubmit,
    handleRegisterForm,
    errors,
    isSubmitting,
    password,
  };
};
export default useRegister;
