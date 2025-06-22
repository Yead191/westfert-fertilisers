import { baseApi } from "@/redux/base/baseApi";

export type UserType = {
  _id: string;
  name: string;
  designation: string;
  email: string;
  password: string;
  image: string;
  status: string;
  verified: boolean;
  contact?: string;
};

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),

    login: build.mutation<
      { message: string },
      { email: string; password: string; remember?: boolean }
    >({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: credentials,
        credentials: "include", // important for cookie
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["profile"], // invalidate profile to refetch after login
    }),

    getProfile: build.query({
      query: () => ({
        url: "/users/profile",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["profile"],
    }),
  }),
});

export const { useGetProfileQuery, useLoginMutation, useRegisterUserMutation } =
  authApi;
