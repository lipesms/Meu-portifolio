import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type AboutMeType = {
  title: string
  description: string[]
}

const initialState: AboutMeType = {
  title: '',
  description: []
}

const AboutMeSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addMyDescription: (state, action: PayloadAction<AboutMeType>) => {
      state.title = action.payload.title
      state.description = action.payload.description
    }
  }
})

export const { addMyDescription } = AboutMeSlice.actions

export default AboutMeSlice.reducer
