import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005", //base path
  }),
  endpoints(builder) {
    return {
      //name: fetchAlbums
      fetchAlbums: builder.query({
        //invalidate tag (out of sync)
        providesTags: (result, error, user) => {
          const tags = result.map((album) => {
            return { type: "Album", id: album.id };
          });
          tags.push({ type: "UsersAlbums", id: user.id });
          return tags;
        },
        // perform read (query) / write (mutation)
        query: (user) => {
          return {
            url: "/albums", //additional path
            params: {
              // query string eg: ?userId=24
              userId: user.id,
            },
            method: "GET", // method
            //body is ---
          };
        },
      }),
      addAlbums: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "UsersAlbums", id: user.id }];
        },

        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),

      removeAlbums: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "Album", id: album.id }];
        },

        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

//hook generated by RTK query:
//albumsApi.useFetchAlbumsQuery()

//export generated hook
export const {
  useRemoveAlbumsMutation,
  useFetchAlbumsQuery,
  useAddAlbumsMutation,
} = albumsApi;
export { albumsApi };
