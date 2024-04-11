import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type AboutMe = {
  title: string
  description: string[]
}

type Projects = {
  title: string
  description: string
  image: string
  url: string
}

type technologies = {
  myLanguages: string[]
  tools: string[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://teste-iota-ebon.vercel.app/data'
  }),
  endpoints: (builder) => ({
    getAboutMe: builder.query<AboutMe, void>({
      query: () => '/aboutMe.json'
    }),
    getProjects: builder.query<Projects[], void>({
      query: () => '/projects.json'
    }),
    getTechnologies: builder.query<technologies, void>({
      query: () => '/technologies.json'
    })
  })
})

export const {
  useGetAboutMeQuery,
  useGetProjectsQuery,
  useGetTechnologiesQuery
} = api
export default api
