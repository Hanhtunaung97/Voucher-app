import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useCookie from "react-use-cookie";
import { signIn } from "../../../services/auth";
const useLogin = () => {
  const [token, setToken] = useCookie("my_token");
  const [userCookie, setUserCookie] = useCookie("user_cookie");
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm();
  const handleLoginForm = async (data) => {
    console.log(data);
    try {
      const res = await signIn(data);
      const json = await res.json();
      console.log(json);
      if (res.status === 200) {
        toast.success(`${json.user.name} is logged in successfully!`);
        reset();
        setToken(json.token);
        setUserCookie(JSON.stringify(json.user));
        nav("/dashboard");
      } else {
        toast.error(json.message);
        throw new Error(json.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return { handleSubmit, handleLoginForm, isSubmitting, errors, register };
};
export default useLogin;
