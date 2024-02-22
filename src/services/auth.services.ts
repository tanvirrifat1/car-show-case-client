import { authKey } from "@/ultis/Token";
import { getFromLocalStorage, setToLocalStorage } from "@/ultis/local-Storage";
import { jwtDecode } from "jwt-decode";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

// export const getUserInfo = () => {
//   const authToken = getFromLocalStorage(authKey);
//   if (authToken) {
//     const decodedData = decodedToken(authToken);
//     return decodedData;
//   } else {
//     return "";
//   }
// };

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodeData = jwtDecode(authToken);
    return decodeData;
  } else {
    return "";
  }
};

export const getToken = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return authToken;
  } else {
    return "";
  }
};

export const isLoggedin = () => {
  const authToken = getFromLocalStorage(authKey);

  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
