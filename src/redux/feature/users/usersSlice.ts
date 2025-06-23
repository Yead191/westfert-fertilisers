import { baseApi } from "@/redux/base/baseApi";
// import build from "next/dist/build";

const userSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // all user
    allUser: build.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    // updateStatus
    updateStatus: build.mutation({
      query: ({ id, data }) => ({
        url: `/users/profile/status/${id}`,
        method: "PATCH",
        body: data,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    // update profile
    updateProfile: build.mutation({
      query: ({ id, data }) => ({
        url: `/users/profile/update/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useAllUserQuery,
  useUpdateStatusMutation,
  useUpdateProfileMutation,
} = userSlice;
