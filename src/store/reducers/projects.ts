import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ProjectsType = {
  title: string
  description: string
  image: string
  url: string
}

type ProjectsState = {
  itens: ProjectsType[]
}

const initialState: ProjectsState = {
  itens: [
    {
      title: '',
      description: '',
      image: '',
      url: ''
    }
  ]
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProjects: (state, action: PayloadAction<ProjectsType[]>) => {
      state.itens = action.payload
    }
  }
})

export const { addProjects } = projectsSlice.actions

export default projectsSlice.reducer
