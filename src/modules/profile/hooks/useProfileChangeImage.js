import React from "react";
import toast from "react-hot-toast";
import useCookie from "react-use-cookie";
import useUserStore from "../../../store/useUserStore";
import { updateImage } from "../../../services/profile";
const useChangeImage = () => {
  const inputRef = React.useRef();
  const [token] = useCookie("my_token");
  const [userCookie, setUserCookie] = useCookie("user_cookie");
  const {
    user: { profile_image },
    setUser,
  } = useUserStore();
  const [isSending, setIsSending] = React.useState(false);
  const handleChangeProfileBtn = React.useCallback(() => {
    inputRef.current.click();
  }, [inputRef]);
  const handleChangeImage = React.useCallback(
    async (event) => {
      const data = event.target.files[0];
      const formData = new FormData();
      formData.append("profile_image", data);
      setIsSending(true);
      try {
        const res = await updateImage(formData);
        const json = await res.json();
        if (res.status === 200) {
          toast.success(
            `${json.user.name} profile image is changed successfully`
          );
          setUserCookie(JSON.stringify(json.user));
          setUser(json.user);
        } else {
          toast.error(json.message);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      } finally {
        setIsSending(false);
      }
    },
    [inputRef, setIsSending, token, userCookie, setUserCookie, setUser]
  );

  return {
    handleChangeProfileBtn,
    handleChangeImage,
    isSending,
    profile_image,
    inputRef,
  };
};
export default useChangeImage;
