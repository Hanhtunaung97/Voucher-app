import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCookie from "react-use-cookie";
import useUserStore from "../../../store/useUserStore";
import { updateName } from "../../../services/profile";
import { useNavigate } from "react-router-dom";
const useChangeName = () => {
  const nav = useNavigate();
  const [userCookie, setUserCookie] = useCookie("user_cookie");
  const {
    user: { name },
    setUser,
  } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const handleChangeName = async (data) => {
    try {
      const res = await updateName(data);
      const json = await res.json();
      if (res.status === 200) {
        toast.success(`${json.user.name} name is changed successfully`);
        setUserCookie(JSON.stringify(json.user));
        setUser(json.user);
        reset();
        nav("/dashboard");
      } else {
        toast.error(json.message);
        throw new Error(json.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return {
    handleChangeName,
    errors,
    isSubmitting,
    register,
    handleSubmit,
  };
};
export default useChangeName;
