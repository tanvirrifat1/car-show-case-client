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
      invalidatesTags: ["user"],
    }),

    userLogin: build.mutation({
      query: (userLogin) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: userLogin,
      }),
    }),
  }),
});

export const { useUserSignUpMutation, useUserLoginMutation } = authApi;
