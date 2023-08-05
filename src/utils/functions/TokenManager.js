import cookies from "react-cookies";

export const setToken = (accessToken, expire_at) => {
  const expires = new Date(expire_at);

  cookies.save("accessToken", accessToken, {
    path: "/",
    expires: expires,
    httpOnly: process.env.REACT_APP_PUBLIC_HTTP_ONLY === "true",
  });
};

export const removeToken = () => {
  cookies.remove("accessToken");
  cookies.remove("refreshToken");
};

export const getToken = () => {
  const { accessToken, refreshToken } = cookies.select();
  return { accessToken, refreshToken };
};
