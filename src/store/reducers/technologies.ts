import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type AboutMeType = {
  myLanguages: string[]
  tools: string[]
}

const initialState: AboutMeType = {
  myLanguages: [],
  tools: []
}

const TechnologiesSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addTechnologies: (state, action: PayloadAction<AboutMeType>) => {
      state.myLanguages = action.payload.myLanguages
      state.tools = action.payload.tools
    }
  }
})

export const { addTechnologies } = TechnologiesSlice.actions

export default TechnologiesSlice.reducer
