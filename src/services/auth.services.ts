import { setToLocalStorage } from "@/ultis/local-Storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  setToLocalStorage("accessToken", accessToken);
};
