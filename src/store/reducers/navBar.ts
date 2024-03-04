import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type navBar = {
  sections: 'sobre' | 'tecnologias' | 'projetos'
}

const initialState: navBar = {
  sections: 'sobre'
}

const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    changeSection: (
      state,
      action: PayloadAction<'sobre' | 'tecnologias' | 'projetos'>
    ) => {
      if (action.payload != undefined) {
        state.sections = action.payload
      }
    }
  }
})

export const { changeSection } = navBarSlice.actions

export default navBarSlice.reducer
