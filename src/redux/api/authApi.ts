import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userSignUp: build.mutation({
      query: (signUpData) => ({
        url: `${AUTH_URL}/create-user`,
        method: "POST",
        data: signUpData,
      }),
    }),
  }),
});

export const { useUserSignUpMutation } = authApi;
