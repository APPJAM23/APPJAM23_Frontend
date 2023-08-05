import instance from "../../axios";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";

export const UserSignup = () => {
  const navigate = useNavigate();

  return useMutation(
    async (inputsData) =>
      instance.post("/user", {
        id: inputsData.id,
        pw: inputsData.password,
      }),
    {
      onError: (error) => {
        alert(`${error.response.data}`);
      },
      onSuccess: () => {
        alert(`회원가입에 성공하였습니다. 로그인 페이지로 이동해주세요.`);
        navigate("/login");
      },
    }
  );
};
