import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// const baseUrl = process.env.VITE_BASE_URL;
const baseUrl = "http://localhost:3000/api/v1";

export const postsApi = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/posts/`, prepareHeaders: (headers, { getState }) => {

            const accessTokenObject = JSON.parse(localStorage.getItem("access_token"));
            if (accessTokenObject) {
                headers.set('Authorization', `Bearer ${accessTokenObject}`);
            }
            headers.set('Content-Type', 'application/json');

            return headers;
        },
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getLatestPosts: builder.query({
            query: (params) => ({ url: "latest-posts", params }),
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
                    : ['Post'],
        }),
        getTrendingPosts: builder.query({
            query: (params) => ({ url: "trending-posts", params }),
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
                    : ['Post'],
        }),
        isLikedPost: builder.query({
            query: (params) => ({ url: "isliked-by-user", params }),
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
                    : ['Post'],
        }),
        getPostComments: builder.query({
            query: (params) => ({ url: "get-post-comments", params }),
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
                    : ['Post'],
        }),
        getCommentReplies: builder.query({
            query: (params) => ({ url: "get-replies", params }),
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
                    : ['Post'],
        }),
        deletePost: builder.query({
            query: (params) => ({ url: "delete-post", params })
        }),
        deleteComment: builder.query({
            query: (params) => ({ url: "delete-comment", params })
        }),
        getNotifications: builder.query({
            query: (params) => ({ url: "get-notifications", params }),
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
                    : ['Post'],
        }),
        getNotificationsCount: builder.query({
            query: (params) => ({ url: "get-notifications-count", params }),
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
                    : ['Post'],
        }),
        searchPosts: builder.query({
            query: (params) => ({ url: "search-posts", params }),
            providesTags: (result, error, arg) =>
                result
                    ? [{ type: 'Post', id: "LIST" } , ...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
                    : ['Post']
        }),
        getPostsTags: builder.query({
            query: () => "tags"
        }),

    })
})

export const { useGetLatestPostsQuery,
    useGetTrendingPostsQuery,
    useGetPostsTagsQuery,
    useSearchPostsQuery,
    useDeleteCommentQuery,
    useDeletePostQuery,
    useGetCommentRepliesQuery,
    useGetNotificationsCountQuery,
    useGetNotificationsQuery,
    useGetPostCommentsQuery,
    useIsLikedPostQuery } = postsApi