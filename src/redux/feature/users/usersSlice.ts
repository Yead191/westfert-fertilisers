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
  }),
});

export const { useAllUserQuery } = userSlice;
