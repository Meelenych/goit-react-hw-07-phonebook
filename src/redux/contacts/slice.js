import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61d338ddb4c10c001712b88f.mockapi.io/",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    createContact: builder.mutation({
      query: ({ name, number }) => ({
        url: "/contacts",
        method: "POST",
        body: { name, number },
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
