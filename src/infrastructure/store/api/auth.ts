// api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: () => 'posts',
    }),
  }),
});

export const { useFetchPostsQuery } = api;
